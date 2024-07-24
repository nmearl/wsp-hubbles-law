# Introduction to Astronomical Coordinates

```{figure} https://upload.wikimedia.org/wikipedia/commons/e/ef/Celestial_Sphere_-_Equatorial_Coordinate_System.png
:align: right
:width: 200px
Equatorial coordinate system.\
Credit: Wikimedia Commons.
```

When observing the night sky, astronomers need a systematic way to locate celestial objects. Just like the geographical coordinate system used to pinpoint locations on Earth, there are coordinate systems designed to specify positions of objects in the sky. These systems are crucial for mapping and tracking stars, planets, galaxies, and other astronomical phenomena. In this article, we will explore the basic concepts of astronomical coordinates, why they are expressed in degrees or hour angles, and how these systems facilitate astronomical observations.

## The Celestial Sphere

To understand astronomical coordinates, it is essential to first grasp the concept of the celestial sphere. The celestial sphere is an imaginary sphere of arbitrary large radius with the Earth at its center. All celestial objects can be thought of as projected onto the inner surface of this sphere.

### Celestial Coordinate Systems

There are several coordinate systems used in astronomy, but the most commonly used are the equatorial coordinate system and the horizontal coordinate system. We will only focus on the former in this project. Likewise, for our use case, SDSS coordinates are often *both* given in degrees, but it is important to understand the concept of hour angles as well.

#### Equatorial Coordinate System

The equatorial coordinate system is analogous to the geographical coordinate system on Earth, which uses latitude and longitude. It uses two main coordinates:

- **Right Ascension (RA)**: This is analogous to longitude but on the celestial sphere. Right Ascension measures the angle eastward along the celestial equator from the vernal equinox to the hour circle passing through the object. RA is usually expressed in hour angles (h), minutes (m), and seconds (s), where 24 hours correspond to a full 360 degrees circle around the celestial equator. One hour equals 15 degrees of arc.

- **Declination (Dec)**: This is analogous to latitude. Declination measures the angle north or south of the celestial equator. It is expressed in degrees (°), arcminutes ('), and arcseconds ("). Positive values indicate north of the celestial equator, while negative values indicate south.

```plaintext
Right Ascension (RA): 0h to 24h
Declination (Dec): +90° (north celestial pole) to -90° (south celestial pole)
```

```{figure} https://dq0hsqwjhea1.cloudfront.net/RA-Dec-eq-region-with-coordinates.jpg
Here's a slice of sky bisected by the celestial equator with hours of right ascension (RA) labeled along the top and declination (Dec.) at left. The coordinates of the bright stars Betelgeuse and Sirius are also shown.
Credit: Stellarium.
```

## Why Degrees and Hour Angles?

### Degrees

Degrees are a measure of angle. The use of degrees in astronomical coordinates allows for a precise and universally understood way of describing the position of an object in the sky. The celestial sphere, like any sphere, is divided into 360 degrees. This makes it straightforward to translate angular measurements into real positions.

### Hour Angles

Right Ascension is expressed in hour angles rather than degrees to simplify the conversion between time and the position of objects in the sky. Since the Earth rotates 360 degrees in approximately 24 hours, the sky appears to revolve around us at a rate of 15 degrees per hour. Expressing Right Ascension in hours, minutes, and seconds allows astronomers to easily calculate the position of celestial objects relative to the Earth's rotation and the observer's local time.

## Importance of Astronomical Coordinates

The use of astronomical coordinates is vital for several reasons:

1. **Locating Objects**: Precise coordinates allow astronomers to find and observe specific celestial objects. This is essential for both amateur stargazing and professional astronomical research.

2. **Mapping the Sky**: Astronomical coordinates enable the creation of star maps and catalogs, which are crucial for navigation and understanding the structure of the universe.

3. **Tracking Movement**: By recording the coordinates of celestial objects over time, astronomers can track their movements and study phenomena such as the orbits of planets, the proper motion of stars, and the expansion of galaxies.

Understanding astronomical coordinates is fundamental for anyone interested in astronomy. Whether you are a casual stargazer or a professional astronomer, these systems provide a consistent and accurate way to navigate the night sky. By using degrees and hour angles, astronomers can pinpoint the location of celestial objects and track their movements with precision. With this knowledge, the wonders of the universe become much more accessible and comprehensible.