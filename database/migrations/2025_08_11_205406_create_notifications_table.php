<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();

            // The user who this notification is for
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            
            // Type of notification, e.g., 'new_message', 'booking_approved'
            $table->string('type');
            
            $table->text('message');
            
            // A URL to redirect the user to when they click the notification
            $table->string('link')->nullable();
            
            $table->boolean('is_read')->default(false);

            $table->timestamps(); // creates `created_at` and `updated_at`
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};