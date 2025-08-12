<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\PropertyImageController; // <-- Make sure this is imported
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [ /* ... */ ]);
});

Route::get('/dashboard', function (Request $request) {
    // Get the authenticated user. This is guaranteed to exist because of the 'auth' middleware.
    $user = $request->user();
    $summaryData = [];

    // Use a try-catch block for safety in case relationships are not defined yet
    try {
        if ($user->role === 'landlord') {
            $summaryData['total_properties'] = $user->properties()->count();
            $summaryData['active_listings'] = $user->properties()->where('is_available', true)->count();
            $summaryData['pending_requests'] = \App\Models\Booking::whereIn('property_id', $user->properties()->pluck('id'))
                ->where('status', 'pending')
                ->count();
        } else { // Default to tenant view
            $summaryData['booking_count'] = $user->bookings()->where('status', 'approved')->count();
            $summaryData['favorite_count'] = $user->favorites()->count();
        }
    } catch (\Exception $e) {
        error_log("Dashboard data fetching error: " . $e->getMessage());
    }

    // Simply render the Dashboard component and pass the user's data to it.
    // The React component will decide what to show.
    return Inertia::render('Dashboard', [
        'summaryData' => $summaryData,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

// --- Main middleware group for all authenticated users ---
Route::middleware('auth')->group(function () {
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // --- THIS IS THE CRITICAL FIX ---
    // We are adding 'update' to the list of allowed actions.
    Route::resource('properties', PropertyController::class)
        ->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);

    // Landlord-specific route
    Route::get('/my-properties', [PropertyController::class, 'myProperties'])
         ->name('my-properties.index');

    // Image deletion route
    Route::delete('/property-images/{propertyImage}', [PropertyImageController::class, 'destroy'])
         ->name('properties.images.destroy');
});

require __DIR__.'/auth.php';