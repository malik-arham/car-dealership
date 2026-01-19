#!/usr/bin/env python3
"""
Generate PNG icons for DrivePro PWA in all required sizes
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create assets/icons directory if it doesn't exist
icons_dir = './assets/icons'
os.makedirs(icons_dir, exist_ok=True)

def create_icon(size):
    """Create a PNG icon with DrivePro branding"""
    # Create image with white background
    img = Image.new('RGBA', (size, size), color=(255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw background circle (dark theme)
    margin = int(size * 0.05)
    draw.rectangle(
        [(margin, margin), (size - margin, size - margin)],
        fill=(26, 26, 26, 255),
        outline=(231, 76, 60, 255),
        width=max(1, int(size * 0.05))
    )
    
    # Draw car shape (simplified)
    # Car body
    car_left = int(size * 0.2)
    car_right = int(size * 0.8)
    car_top = int(size * 0.4)
    car_bottom = int(size * 0.65)
    
    # Main body
    draw.rectangle(
        [(car_left, car_top), (car_right, car_bottom)],
        fill=(231, 76, 60, 255)
    )
    
    # Car roof/windshield
    roof_top = int(size * 0.25)
    roof_left = int(size * 0.3)
    roof_right = int(size * 0.7)
    
    draw.polygon(
        [(roof_left, car_top), (roof_right, car_top), (car_right - int(size * 0.08), roof_top), (car_left + int(size * 0.08), roof_top)],
        fill=(231, 76, 60, 255)
    )
    
    # Wheels
    wheel_radius = int(size * 0.08)
    wheel_y = car_bottom + int(size * 0.05)
    
    # Left wheel
    left_wheel_x = int(size * 0.3)
    draw.ellipse(
        [(left_wheel_x - wheel_radius, wheel_y - wheel_radius), 
         (left_wheel_x + wheel_radius, wheel_y + wheel_radius)],
        fill=(26, 26, 26, 255)
    )
    
    # Right wheel
    right_wheel_x = int(size * 0.7)
    draw.ellipse(
        [(right_wheel_x - wheel_radius, wheel_y - wheel_radius), 
         (right_wheel_x + wheel_radius, wheel_y + wheel_radius)],
        fill=(26, 26, 26, 255)
    )
    
    # Add white accent stripe
    stripe_y = int(size * 0.55)
    draw.rectangle(
        [(car_left, stripe_y), (car_right, stripe_y + int(size * 0.04))],
        fill=(255, 255, 255, 255)
    )
    
    return img

def create_solid_icon(size):
    """Create a solid colored icon"""
    img = Image.new('RGBA', (size, size), color=(26, 26, 26, 255))
    draw = ImageDraw.Draw(img)
    
    # Draw outer border
    border_width = max(1, int(size * 0.05))
    draw.rectangle(
        [(border_width, border_width), 
         (size - border_width, size - border_width)],
        outline=(231, 76, 60, 255),
        width=border_width
    )
    
    # Draw car icon
    car_left = int(size * 0.25)
    car_right = int(size * 0.75)
    car_top = int(size * 0.35)
    car_bottom = int(size * 0.65)
    
    # Car body
    draw.rectangle(
        [(car_left, car_top), (car_right, car_bottom)],
        fill=(231, 76, 60, 255)
    )
    
    # Wheels
    wheel_radius = int(size * 0.07)
    wheel_y = car_bottom + int(size * 0.08)
    
    draw.ellipse(
        [(car_left + int(size * 0.15) - wheel_radius, wheel_y - wheel_radius),
         (car_left + int(size * 0.15) + wheel_radius, wheel_y + wheel_radius)],
        fill=(231, 76, 60, 255)
    )
    
    draw.ellipse(
        [(car_right - int(size * 0.15) - wheel_radius, wheel_y - wheel_radius),
         (car_right - int(size * 0.15) + wheel_radius, wheel_y + wheel_radius)],
        fill=(231, 76, 60, 255)
    )
    
    return img

# Generate all required icon sizes
required_sizes = [72, 96, 128, 144, 152, 192, 384, 512]

print("Generating DrivePro PWA icons...")
for size in required_sizes:
    icon = create_solid_icon(size)
    filename = f'{icons_dir}/icon-{size}x{size}.png'
    icon.save(filename, 'PNG')
    print(f"✓ Created {filename}")

# Create a larger logo version (512x512 with transparency)
logo = create_icon(512)
logo.save(f'{icons_dir}/logo-512x512.png', 'PNG')
print(f"✓ Created {icons_dir}/logo-512x512.png")

# Create screenshot placeholders
print("\nGenerating screenshot placeholders...")

# Mobile screenshot (540x720)
mobile_screen = Image.new('RGBA', (540, 720), color=(248, 249, 250, 255))
mobile_draw = ImageDraw.Draw(mobile_screen)

# Header
mobile_draw.rectangle([(0, 0), (540, 100)], fill=(26, 26, 26, 255))
mobile_draw.text((50, 40), 'DrivePro', fill=(255, 255, 255, 255), font=None)

# Content area with cars
y_pos = 150
for i in range(3):
    mobile_draw.rectangle(
        [(30, y_pos), (510, y_pos + 120)],
        fill=(255, 255, 255, 255),
        outline=(224, 224, 224, 255),
        width=2
    )
    mobile_draw.text((50, y_pos + 40), f'Featured Car {i+1}', fill=(26, 26, 26, 255), font=None)
    mobile_draw.text((50, y_pos + 70), '$XX,XXX', fill=(231, 76, 60, 255), font=None)
    y_pos += 140

mobile_screen.save(f'{icons_dir}/screenshot-540x720.png', 'PNG')
print(f"✓ Created {icons_dir}/screenshot-540x720.png")

# Desktop screenshot (1280x720)
desktop_screen = Image.new('RGBA', (1280, 720), color=(248, 249, 250, 255))
desktop_draw = ImageDraw.Draw(desktop_screen)

# Header
desktop_draw.rectangle([(0, 0), (1280, 80)], fill=(26, 26, 26, 255))
desktop_draw.text((50, 30), 'DrivePro - Premium Cars', fill=(255, 255, 255, 255), font=None)

# Content with car grid
x_pos = 30
y_pos = 120
for i in range(4):
    x = x_pos + (i % 4) * 300
    if i > 0 and i % 4 == 0:
        y_pos += 200
        x = x_pos
    
    desktop_draw.rectangle(
        [(x, y_pos), (x + 280, y_pos + 180)],
        fill=(255, 255, 255, 255),
        outline=(224, 224, 224, 255),
        width=2
    )
    desktop_draw.text((x + 20, y_pos + 60), f'Car {i+1}', fill=(26, 26, 26, 255), font=None)
    desktop_draw.text((x + 20, y_pos + 100), '$XX,XXX', fill=(231, 76, 60, 255), font=None)

desktop_screen.save(f'{icons_dir}/screenshot-1280x720.png', 'PNG')
print(f"✓ Created {icons_dir}/screenshot-1280x720.png")

print("\n✓ All icons and screenshots generated successfully!")
print(f"Icons location: {os.path.abspath(icons_dir)}")
