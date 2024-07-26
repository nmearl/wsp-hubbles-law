# Determining the Age of the Universe

You've taken a hands-on approach to one of the most profound discoveries in modern astrophysics: the expansion of the universe. By measuring the redshifts of galaxies and using them to determine their radial velocities, you’ve tapped into a method pioneered by Edwin Hubble in the 1920s. By plotting these velocities against the distances you've calculated, you derived Hubble's Law, which is the relationship between a galaxy's velocity and its distance from us. Now, let's use this relationship to calculate the age of the universe.

## Historical Context

As you've leaned, Edwin Hubble fundamentally changed our understanding of the universe with his observations in the 1920s. By examining the light from distant galaxies, he discovered that they were moving away from us, and that the farther away a galaxy is, the faster it appears to be receding. This relationship is now known as Hubble's Law and is expressed as:

$$ v = H_0 \times d $$

where:
- $ v $ is the radial velocity of the galaxy,
- $ d $ is the distance to the galaxy,
- $ H_0 $ is the Hubble constant, which represents the rate of expansion of the universe.

Hubble's work provided the first empirical evidence that the universe is expanding, a groundbreaking shift from the static universe model that had been accepted for centuries.

## Calculating the Age of the Universe

The Hubble constant $ H_0 $ gives us a direct way to estimate the age of the universe. The reasoning behind this is straightforward: if the universe is expanding uniformly, we can work backward to determine how long it has been expanding to reach its current state.

1. **Understanding the Units:**
   The Hubble constant $ H_0 $ is typically given in units of kilometers per second per megaparsec (km/s/Mpc). To calculate the age of the universe, we need to convert this to more convenient units (like seconds or years).

2. **Hubble Time:**
   The reciprocal of the Hubble constant ($ H_0 $) gives us a time scale known as the Hubble time ($ T_H $). This time scale provides an estimate of the age of the universe if the expansion rate has been constant over time.

   $$ T_H = \frac{1}{H_0} $$

   To convert this into years, we need to handle the units carefully:
   - 1 megaparsec (Mpc) = $ 3.09 \times 10^{19} $ kilometers
   - $ 1 \text{ year} = 3.15 \times 10^7 \text{ seconds} $

3. **Example Calculation:**
   Suppose your measurements yielded a Hubble constant of $ 70 \, \text{km/s/Mpc} $.

   First, convert $ H_0 $ into inverse seconds:

   $$ H_0 = 70 \, \frac{\text{km}}{\text{s} \cdot \text{Mpc}} $$

   Converting megaparsecs to kilometers:

   $$ 70 \, \frac{\text{km}}{\text{s} \cdot \text{Mpc}} = 70 \, \frac{\text{km}}{\text{s} \cdot 3.09 \times 10^{19} \, \text{km}} = 2.27 \times 10^{-18} \, \text{s}^{-1} $$

   The Hubble time is the reciprocal of this value:

   $$ T_H = \frac{1}{2.27 \times 10^{-18} \, \text{s}^{-1}} = 4.41 \times 10^{17} \, \text{s} $$

   Converting seconds to years:

   $$ 4.41 \times 10^{17} \, \text{s} \times \frac{1 \, \text{year}}{3.15 \times 10^7 \, \text{s}} = 1.40 \times 10^{10} \, \text{years} $$

   So, the age of the universe is approximately 14 billion years.

## Easy Age Calculation

Use the tool below to calculate the age of the universe based on the Hubble constant you've measured. Enter your value for $ H_0 $ in the box and click "Calculate" to see the estimated age of the universe.

```{card} 
**Age Calculator**
^^^

<div>
    <label for="hubbleConstant">Hubble Constant (H<sub>0</sub>): </label>
    <input type="number" id="hubbleConstant" name="hubbleConstant" step="any">
</div>


<div class="admonition-result admonition" id="result-div" style="display: none;">
   <div class="admonition-title">Result</div>
   <p id="result">Result</p>
</div>

+++
<button style="float: right;" onclick="calculateAge()">Calculate</button>

<script>
function calculateAge() {
    // Get the value of the Hubble constant
    var hubbleConstant = document.getElementById("hubbleConstant").value;
    
    // Convert the Hubble constant to inverse seconds
    var hubbleConstantPerSecond = hubbleConstant / (3.09e19);
    
    // Calculate the Hubble time in seconds
    var hubbleTimeInSeconds = 1 / hubbleConstantPerSecond;
    
    // Convert Hubble time to years
    var secondsInYear = 3.154e7;
    var hubbleTimeInYears = hubbleTimeInSeconds / secondsInYear / 1e9;
    
    // Display the result
    var result = "The estimated age of the universe is approximately " + hubbleTimeInYears.toFixed(2) + " billion years.";
    document.getElementById("result").innerHTML = result;
    document.getElementById("result-div").style.display = "block";
}
</script>
```

## What Did We Discover?

By fitting a line to your velocity versus distance plot and calculating the slope (the Hubble constant), you've not only replicated a key historical discovery but also derived a critical value used to estimate the age of the universe. Understanding the Hubble constant allows astronomers to piece together the timeline of our universe, offering insights into its past, present, and future.

This exercise highlights the power of observational astronomy and the importance of careful measurement and analysis. The expansion rate you calculated tells the story of the universe's evolution, from the Big Bang to its present state, and continues to inform our understanding of the cosmos.

## Consider Your Results

```{dropdown} What are some potential sources of uncertainty in your measurements of galaxy distances and velocities? How might these uncertainties affect your calculation of the Hubble constant?
:style: 
- Measurement errors in redshift and radial velocity.
- Assumptions about galaxy sizes when calculating distances.
- Uncertainties in the position and movement of galaxies due to local gravitational effects.
```

```{dropdown} In what ways could your methods for measuring galaxy distances and velocities lead to an over or under prediction of the Hubble constant?

- If the galaxies are not uniformly distributed, it could lead to biased distance measurements.
- Misestimating galaxy diameters could lead to incorrect distance calculations.
- Redshift measurements could be affected by the motion of galaxies within their local clusters, leading to inaccuracies in velocity estimations.
```

```{dropdown} How do the assumptions made about the size of galaxies (comparable to the Milky Way) impact your distance calculations? What other methods could you use to measure distances that might reduce this uncertainty?

- Discuss the potential variability in galaxy sizes and its impact on distance measurements.
- Introduce alternative methods like standard candles (e.g., Cepheid variables, Type Ia supernovae) for distance measurement.
```
    
```{dropdown} Based on the current understanding of the expansion of the universe, what do you think the universe would look like far in the future? Consider both scenarios where the expansion rate remains constant and where it changes.

- If the expansion rate remains constant, galaxies will continue to move away from each other, leading to an increasingly sparse universe where distant galaxies become fainter and eventually invisible.
- If the expansion rate accelerates (as current observations suggest due to dark energy), this process will happen even faster, leading to a scenario often described as the "Big Freeze" where galaxies move away from each other so quickly that the night sky will eventually go dark, leaving our galaxy isolated.
```