# Wrap-Up Presentation

Our journey into understanding the expanding universe has been an exciting and educational adventure, bridging history, observational astronomy, and modern data analysis techniques. Through this project, we have retraced the steps of astronomers from the early 20th century to the present day, using real astronomical data to measure the expansion rate of the universe and estimate its age. This article will review each stage of our project and provide guidance for preparing a presentation on the topics and lessons learned.

## The Great Debate and Hubble's Discovery

Our exploration began with the historical context of the early 1900s, a time when the nature of the universe was fiercely debated. The Great Debate of 1920, between Harlow Shapley and Heber Curtis, centered on the size of the universe and whether spiral nebulae were part of our Milky Way or distant galaxies.

Edwin Hubble's groundbreaking work in the 1920s provided the answer. By observing Cepheid variable stars in the Andromeda Nebula, Hubble demonstrated that these "nebulae" were indeed separate galaxies far beyond the Milky Way. Further, Hubble discovered that the farther a galaxy is, the faster it is receding from us, leading to the formulation of Hubble's Law. This was the first observational evidence that the universe is expanding.

## Retrieving Galaxy Data from the SDSS Database

To replicate and extend Hubble's work, we used the Sloan Digital Sky Survey (SDSS) database, a treasure trove of astronomical data. Through Python and the astroquery library, we retrieved the spectra of various galaxies. By analyzing these spectra, we measured the redshifts of the galaxies, which indicate how much the universe has expanded since the light left the galaxies.

The radial velocity $ v $ of each galaxy was calculated using the redshift $ z $ with the formula:

$$ v = z \cdot c $$

where $ c $ is the speed of light.

## Measuring Galaxy Distances

Next, we used the SDSS database to retrieve images of the galaxies. Assuming these galaxies are similar in size to the Milky Way, we measured their angular diameters. With these measurements, we estimated the distances $ d $ to the galaxies using the formula:

$$ d = \frac{D}{\theta} $$

where $ D $ is the actual diameter of the Milky Way, and $ \theta $ is the angular diameter in radians.

## Calculating the Hubble Constant

By plotting the radial velocities against the distances of the galaxies, we derived the slope of the line, which represents the Hubble constant $ H_0 $. This constant tells us the rate at which the universe is expanding. We then used this value to estimate the age of the universe.

## Estimating the Age of the Universe

The age of the universe can be approximated using the reciprocal of the Hubble constant:

$$ T_H = \frac{1}{H_0} $$

Converting the Hubble constant from km/s/Mpc to inverse seconds and then to years, we derived the age of the universe, providing us with a tangible number to understand the vast timeline of cosmic history.

## Preparing Your Presentation

Now, it's time to put together a presentation that showcases your journey and discoveries. Here's a structure you can follow:

1. **Introduction:**
   - Briefly introduce the project and its objectives.
   - Explain the historical context, including the Great Debate and Hubble's discovery.

2. **Data Retrieval and Analysis:**
   - Describe how you used Python and astroquery to retrieve galaxy spectra from the SDSS database.
   - Explain the process of measuring redshifts and calculating radial velocities.

3. **Galaxy Images and Distance Measurement:**
   - Detail how you retrieved galaxy images and measured angular diameters.
   - Discuss the assumptions made (e.g., galaxies are similar in size to the Milky Way) and how you calculated distances.

4. **Hubble Constant and Universe Age:**
   - Show the plot of radial velocity versus distance.
   - Explain how you derived the Hubble constant and used it to estimate the age of the universe.

5. **Sources of Uncertainty and Reflection:**
   - Discuss potential sources of uncertainty in your measurements.
   - Reflect on the significance of the results and what you learned about the expanding universe.

6. **Future Work and Questions:**
   - Propose follow-up questions for further exploration.
   - Speculate on what the future universe might look like based on current understanding.

7. **Conclusion:**
   - Summarize the key points of your project.
   - Highlight the historical and scientific importance of your findings.

It is my sincere hope that you learned something new this week and you walk away with a new appreciation for the universe around you and the ways in which we attempt to understand it. Thank you for joining me on this cosmic journey, and I wish you all the best in your future endeavors!