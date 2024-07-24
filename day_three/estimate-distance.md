# How to Use Angular Diameter to Calculate Distance

Understanding the vastness of the universe involves determining distances to celestial objects, such as galaxies. One of the fundamental methods to achieve this is by using the concept of angular diameter. In this article, we will explore how to calculate distances to galaxies by measuring their angular diameter, assuming that these galaxies are the same size as our Milky Way.

## Assumption: Galaxies Are the Size of the Milky Way

To simplify our calculations, we will assume that the galaxies we are observing are approximately the same size as the Milky Way. The Milky Way has a diameter of about 100,000 light-years (ly). For our calculations, we will convert this diameter to parsecs (pc), where 1 parsec ≈ 3.26 light-years.

$$ D = 100,000 \text{ ly} \times \frac{1 \text{ pc}}{3.26 \text{ ly}} \approx 30,700 \text{ pc} $$

Since we will express distances in mega parsecs (Mpc), we convert this diameter:

$$ D \approx 0.0307 \text{ Mpc} $$

## The Small Angle Approximation

```{figure} https://www.mathsisfun.com/algebra/images/sin-cos-tan.svg
Trigonometric functions. Credit: Math is Fun.
```

The small angle approximation is a useful tool in astronomy when dealing with objects that appear very small in the sky. For small angles, measured in radians, the angle in radians is approximately equal to the sine of the angle. This simplification is valid when the angle is much less than one radian.

Mathematically, for a small angle $\theta$ in radians:

$$ \theta \approx \sin(\theta) \approx \tan(\theta) $$

## Calculating the Distance

To find the distance to a galaxy, we can use the relationship between the actual diameter of the galaxy ($D$), its angular diameter ($\theta$), and the distance to the galaxy ($d$). The formula relating these quantities is:

$$ \tan \theta \approx \theta = \frac{D}{d} $$

Rearranging the formula to solve for $d$, we get:

$$ d = \frac{D}{\theta} $$

Here:
- $D$ is the actual diameter of the galaxy (in mega parsecs).
- $\theta$ is the angular diameter of the galaxy (in radians).
- $d$ is the distance to the galaxy (in mega parsecs).

## Example Calculation

Suppose we observe a galaxy with an angular diameter of 0.01 radians. Assuming the galaxy has the same diameter as the Milky Way ($D \approx 0.0307 \text{ Mpc}$), we can calculate the distance to the galaxy using the formula:

$$ d = \frac{D}{\theta} = \frac{0.0307 \text{ Mpc}}{0.01 \text{ radians}} = 3.07 \text{ Mpc} $$

Therefore, the distance to the galaxy is approximately 3.07 mega parsecs.

## Using Degrees Instead of Radians

Astronomers often measure angles in degrees rather than radians. To convert from degrees to radians, we use the conversion factor:

$$ 1 \text{ degree} = \frac{\pi}{180} \text{ radians} $$

If the angular diameter is given in degrees, we first convert it to radians before using the formula.

## Next Steps

We will use these calculated distances, along with the radial velocities calculated in the previous exercise, to quantify the expansion rate of the universe. By understanding and applying these concepts, you can begin to explore the vast distances that separate us from other galaxies in the universe.