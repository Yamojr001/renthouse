<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Property extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'property_type',
        'price',
        'price_period',
        'bedrooms',
        'bathrooms',
        'country',
        'state',
        'city',
        'address',
        'amenities',
        'is_available',
        // Note: We DO NOT add 'user_id' here. Laravel will handle it automatically
        // through the relationship, which is more secure.
    ];

    /**
     * Get the user (landlord) that owns the property.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    public function images(): HasMany
    {
        return $this->hasMany(PropertyImage::class);
    }
}