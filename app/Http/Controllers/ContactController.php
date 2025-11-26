<?php
// FILE: app/Http/Controllers/ContactController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact form.
     */
    public function index()
    {
        return Inertia::render('Contact/Index');
    }

    /**
     * Store a new support ticket from the user.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        // Create a support ticket and associate it with the logged-in user
        $request->user()->supportTickets()->create([
            'subject' => $validated['subject'],
            'message' => $validated['message'],
        ]);

        return to_route('contact.index')->with('success', 'Your message has been sent successfully! Our team will get back to you shortly.');
    }
}