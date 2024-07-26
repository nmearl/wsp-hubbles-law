---
jupytext:
  cell_metadata_filter: -all
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Final Results with Uncertainties

Accurately estimating the age of the universe involves not only deriving a single value but also understanding the uncertainties associated with this estimate. In this section, we will focus on calculating the uncertainty in our measurement of the universe's age using the standard deviation of our Hubble constant measurements.

## Understanding Uncertainty

Uncertainty in scientific measurements is inevitable due to various factors, such as instrument precision, measurement errors, and assumptions made during analysis. For our project, sources of uncertainty may include:
- Errors in measuring redshifts and radial velocities.
- Assumptions about the size of galaxies when calculating distances.
- Inaccuracies in distance measurements due to local gravitational effects.

To estimate the uncertainty in the age of the universe, we need to consider these factors and how they propagate through our calculations.

## Method for Estimating Uncertainty Using Standard Deviation

1. **Collect Multiple Measurements:**
   Each student has measured the Hubble constant using different galaxies. We will collect these measurements to understand their distribution.

2. **Calculate the Mean and Standard Deviation:**
   Using Python, we will calculate the mean and standard deviation of the Hubble constant measurements. The standard deviation provides a measure of the spread of the measurements and thus an estimate of the uncertainty.

3. **Convert to Age Uncertainty:**
   Using the mean and standard deviation of the Hubble constant, we will calculate the corresponding age of the universe. The standard deviation of the Hubble constant will be used to determine the range of uncertainty in the age estimate.

```{card}
**Final Age Calculator (with Uncertainties)**
^^^
<p>Enter Hubble constant measurements (comma-separated):
<input type="text" id="hubbleConstants" placeholder="e.g., 70, 68, 72, 71, 69"></p>

<div id="result-output" style="display: none;">
   <p>
      <ul>
        <li id="meanHubble"></li>
        <li id="stdDevHubble"></li>
      </ul>
      <div id="finalResult" class="result-box"></div>
      <p>The current best estimates for the age of the universe is around 13.787 ± 0.020 billion years. But this remains a huge point of contention in astronomy. See <a href="https://en.wikipedia.org/wiki/Hubble%27s_law#21st_century_measurements">this link</a> for more information.</p>
   </p>
</div>

+++
<button style="float: right;" onclick="calculateAgeOfUniverse()">Calculate</button>

<style>
  .result-box {
      border: 2px solid green;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 24px;
      margin-top: 10px;
      display: inline-block;
      width: 100%;
      text-align: center;
      font-weight: bold;
  }
</style>
    
<script>
   function calculateAgeOfUniverse() {
      // Get the input values
      const input = document.getElementById('hubbleConstants').value;
      const hubbleConstants = input.split(',').map(Number);
   
      // Calculate the mean
      const meanHubble = hubbleConstants.reduce((a, b) => a + b, 0) / hubbleConstants.length;
   
      // Calculate the standard deviation
      const stdDevHubble = Math.sqrt(hubbleConstants.map(x => Math.pow(x - meanHubble, 2)).reduce((a, b) => a + b) / hubbleConstants.length);
   
      // Convert Hubble constant to age of the universe (in billion years)
      const hubbleToAge = H => (1 / (H / (3.09e19))) / (3.154e7 * 1e9);
      const meanAge = hubbleToAge(meanHubble);
      const stdDevAge = Math.abs(hubbleToAge(meanHubble - stdDevHubble) - meanAge);
   
      // Display the results
      document.getElementById('meanHubble').textContent = `Mean Hubble constant: ${meanHubble.toFixed(2)} km/s/Mpc`;
      document.getElementById('stdDevHubble').textContent = `Standard deviation: ${stdDevHubble.toFixed(2)} km/s/Mpc`;
      document.getElementById('finalResult').innerHTML = `Estimated Age of the Universe: ${meanAge.toFixed(2)} ± ${stdDevAge.toFixed(2)} billion years`;
      document.getElementById("result-output").style.display = "block";
   }
</script>
```

### Comparing Different Methods of Estimating Uncertainty

1. **Standard Deviation:**
   - **Description:** Calculate the standard deviation of a set of measurements.
   - **Advantages:** Simple to implement and provides a quick estimate of the spread in measurements.
   - **Disadvantages:** Assumes the data follows a normal distribution and may not capture all sources of uncertainty.

2. **Using Distributions:**
   - **Description:** Create a histogram of the measurements and calculate percentiles (e.g., 16th, 50th, and 84th percentiles).
   - **Advantages:** Provides a more detailed understanding of the distribution of measurements and can capture non-normal distributions.
   - **Disadvantages:** More complex to calculate and interpret, especially with small sample sizes.

3. **Propagating Uncertainties:**
   - **Description:** Calculate the uncertainties at each step of the process and propagate them through the calculations.
   - **Advantages:** Provides the most accurate estimate of uncertainty by considering all sources of error and how they affect the final result.
   - **Disadvantages:** Requires detailed knowledge of all sources of uncertainty and more complex calculations.
