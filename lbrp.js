// Define all steps content with enhanced mystical symbols
const steps = [
    {
        title: "Preparation",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-om" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Stand facing East in the center of your ritual space.</li>
                    <li><strong>Say:</strong> Take a few deep breaths to center yourself.</li>
                    <li><strong>Visualize:</strong> A bright white light descending from above, forming a sphere of radiant energy above your head.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Qabalistic Cross: Ateh",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-crown" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Touch your forehead with your index finger or ritual dagger.</li>
                    <li><strong>Say:</strong> "Ateh" (אַתָּה, meaning "Thou art").</li>
                    <li><strong>Visualize:</strong> The white light descending from above your head to your forehead.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Qabalistic Cross: Malkuth",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-seedling" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Draw your hand or dagger down to your chest/solar plexus.</li>
                    <li><strong>Say:</strong> "Malkuth" (מַלְכוּת, meaning "The Kingdom").</li>
                    <li><strong>Visualize:</strong> The light extending down through your body to your feet, connecting you to the earth.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Qabalistic Cross: Ve-Geburah",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-fist-raised" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Touch your right shoulder with your hand or dagger.</li>
                    <li><strong>Say:</strong> "Ve-Geburah" (וְגְבוּרָה, meaning "And the Power").</li>
                    <li><strong>Visualize:</strong> A beam of light extending from the center of your chest to your right shoulder.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Qabalistic Cross: Ve-Gedulah",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-hand-holding-heart" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Touch your left shoulder with your hand or dagger.</li>
                    <li><strong>Say:</strong> "Ve-Gedulah" (וְגְדוּלָה, meaning "And the Glory").</li>
                    <li><strong>Visualize:</strong> A beam of light extending from your right shoulder, through your heart center, to your left shoulder.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Qabalistic Cross: Le-Olam, Amen",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-praying-hands" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Clasp your hands at your chest, over your heart center.</li>
                    <li><strong>Say:</strong> "Le-Olam, Amen" (לְעוֹלָם, אָמֵן, meaning "Forever, Amen").</li>
                    <li><strong>Visualize:</strong> The completed cross of light within and around you, connecting you to the divine.</li>
                </ul>
            </div>
        `
    },
    {
        title: "East Pentagram: Drawing",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-wind" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Remain facing East with your ritual dagger or index finger extended.</li>
                    <li><strong>Say:</strong> Nothing yet, focus on the drawing.</li>
                    <li><strong>Visualize:</strong> Draw a large, glowing blue banishing pentagram of Earth in the air, starting at the lower left point and moving upward.</li>
                </ul>
            </div>
        `
    },
    {
        title: "East Pentagram: Yod-He-Vav-He",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-wind" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Thrust your hand/dagger through the center of the pentagram.</li>
                    <li><strong>Say:</strong> "Yod-He-Vav-He" (יהוה, the Tetragrammaton).</li>
                    <li><strong>Visualize:</strong> The energy of the East (Air) being purified and aligned.</li>
                </ul>
            </div>
        `
    },
    {
        title: "South Pentagram: Drawing",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-fire" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Turn 90 degrees to your right to face South.</li>
                    <li><strong>Say:</strong> Nothing yet, focus on the drawing.</li>
                    <li><strong>Visualize:</strong> Draw the same banishing pentagram of Earth, glowing with electric blue light.</li>
                </ul>
            </div>
        `
    },
    {
        title: "South Pentagram: Adonai",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-fire" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Thrust your hand/dagger through the center of the pentagram.</li>
                    <li><strong>Say:</strong> "Adonai" (אֲדֹנָי).</li>
                    <li><strong>Visualize:</strong> The energy of the South (Fire) being purified and aligned.</li>
                </ul>
            </div>
        `
    },
    {
        title: "West Pentagram: Drawing",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-water" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Turn 90 degrees to your right to face West.</li>
                    <li><strong>Say:</strong> Nothing yet, focus on the drawing.</li>
                    <li><strong>Visualize:</strong> Draw the same banishing pentagram of Earth, glowing with electric blue light.</li>
                </ul>
            </div>
        `
    },
    {
        title: "West Pentagram: Eheieh",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-water" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Thrust your hand/dagger through the center of the pentagram.</li>
                    <li><strong>Say:</strong> "Eheieh" (אֶהְיֶה).</li>
                    <li><strong>Visualize:</strong> The energy of the West (Water) being purified and aligned.</li>
                </ul>
            </div>
        `
    },
    {
        title: "North Pentagram: Drawing",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-mountain" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Turn 90 degrees to your right to face North.</li>
                    <li><strong>Say:</strong> Nothing yet, focus on the drawing.</li>
                    <li><strong>Visualize:</strong> Draw the same banishing pentagram of Earth, glowing with electric blue light.</li>
                </ul>
            </div>
        `
    },
    {
        title: "North Pentagram: Agla",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-mountain" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Thrust your hand/dagger through the center of the pentagram.</li>
                    <li><strong>Say:</strong> "Agla" (אגלא, an acronym for "Atah Gibor Le-Olam Adonai").</li>
                    <li><strong>Visualize:</strong> The energy of the North (Earth) being purified and aligned.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Complete the Circle",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-circle-notch" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Turn 90 degrees to your right to face East again.</li>
                    <li><strong>Say:</strong> Nothing, maintain your focus and concentration.</li>
                    <li><strong>Visualize:</strong> A circle of blue light connecting all four pentagrams around you.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Archangel Raphael",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-wind" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Extend your arms out to form a cross with your body.</li>
                    <li><strong>Say:</strong> "Before me, Raphael" (רָפָאֵל).</li>
                    <li><strong>Visualize:</strong> The archangel of Air in yellow robes standing before you in the East.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Archangel Gabriel",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-water" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Remain in the cross position, focus behind you.</li>
                    <li><strong>Say:</strong> "Behind me, Gabriel" (גַּבְרִיאֵל).</li>
                    <li><strong>Visualize:</strong> The archangel of Water in blue robes standing behind you in the West.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Archangel Michael",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-fire" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Remain in the cross position, focus to your right.</li>
                    <li><strong>Say:</strong> "On my right hand, Michael" (מִיכָאֵל).</li>
                    <li><strong>Visualize:</strong> The archangel of Fire in red robes standing to your right in the South.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Archangel Uriel",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-mountain" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Remain in the cross position, focus to your left.</li>
                    <li><strong>Say:</strong> "On my left hand, Uriel" (אוּרִיאֵל).</li>
                    <li><strong>Visualize:</strong> The archangel of Earth in green robes standing to your left in the North.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Invoke the Pentagrams and Hexagram",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-star" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Remain in the cross position, focus on the pentagrams around you.</li>
                    <li><strong>Say:</strong> "For about me flames the pentagram..."</li>
                    <li><strong>Visualize:</strong> All four pentagrams connected by a circle of light, forming a complete protective sphere.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Activate the Inner Star",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-star-of-david" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Focus on your heart center.</li>
                    <li><strong>Say:</strong> "...and within me shines the six-rayed star."</li>
                    <li><strong>Visualize:</strong> A glowing golden Hexagram (Star of David) illuminating from within your heart, filling your body with divine light.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Closing: Ateh",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-crown" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Touch your forehead with your index finger or ritual dagger.</li>
                    <li><strong>Say:</strong> "Ateh" (אַתָּה).</li>
                    <li><strong>Visualize:</strong> The divine light at your crown chakra.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Closing: Malkuth",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-seedling" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Draw your hand or dagger down to your chest/solar plexus.</li>
                    <li><strong>Say:</strong> "Malkuth" (מַלְכוּת).</li>
                    <li><strong>Visualize:</strong> The light extending down through your body to your feet.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Closing: Ve-Geburah",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-fist-raised" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Touch your right shoulder with your hand or dagger.</li>
                    <li><strong>Say:</strong> "Ve-Geburah" (וְגְבוּרָה).</li>
                    <li><strong>Visualize:</strong> The beam of light extending to your right shoulder.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Closing: Ve-Gedulah",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-hand-holding-heart" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Touch your left shoulder with your hand or dagger.</li>
                    <li><strong>Say:</strong> "Ve-Gedulah" (וְגְדוּלָה).</li>
                    <li><strong>Visualize:</strong> The beam of light extending to your left shoulder.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Closing: Le-Olam, Amen",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-infinity" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Clasp your hands at your chest, over your heart center.</li>
                    <li><strong>Say:</strong> "Le-Olam, Amen" (לְעוֹלָם, אָמֵן).</li>
                    <li><strong>Visualize:</strong> The divine light sealing your energy field and the ritual space.</li>
                </ul>
            </div>
        `
    }
];

// Add this code to handle step navigation
document.addEventListener('DOMContentLoaded', function() {
    const stepContent = document.getElementById('step-content');
    const progressDots = document.querySelectorAll('.progress-dot');
    const ritualProgress = document.getElementById('ritual-progress');
    
    let currentStep = 0;
    let stepHistory = []; // Array to store step history
    
    // Initialize with first step
    if (stepContent && steps.length > 0) {
        updateStep(0);
    }
    
    // Add click event to progress dots
    if (ritualProgress) {
        ritualProgress.addEventListener('click', function(e) {
            if (e.target.classList.contains('progress-dot')) {
                const index = Array.from(progressDots).indexOf(e.target);
                if (index >= 0) {
                    updateStep(index);
                }
            }
        });
    }
    
    // Add navigation buttons to step content
    function updateStep(index) {
        if (index < 0 || index >= steps.length) return;
        
        // Store current step in history if moving forward
        if (index > currentStep) {
            // Add current step to history
            if (currentStep >= 0) {
                stepHistory.push(currentStep);
            }
        }
        
        currentStep = index;
        
        // Update title and step number
        const stepNumberElement = document.querySelector('.step-number');
        if (stepNumberElement) {
            stepNumberElement.textContent = `Step ${index + 1} of ${steps.length}`;
        }
        
        // Extract icon class from step content
        const iconMatch = steps[index].content.match(/<i class="([^"]+)"/);
        
        // Clear the step content area
        stepContent.innerHTML = '';
        
        // Render all previous steps in history
        stepHistory.forEach(historyIndex => {
            const historyStep = steps[historyIndex];
            
            // Create container for previous step
            const previousStepContainer = document.createElement('div');
            previousStepContainer.className = 'previous-step-container';
            previousStepContainer.style.opacity = '0.7';
            previousStepContainer.style.marginBottom = '30px';
            previousStepContainer.style.paddingBottom = '15px';
            previousStepContainer.style.borderBottom = '1px solid rgba(106, 61, 181, 0.2)';
            
            // Add step title to the history
            const titleElement = document.createElement('h3');
            titleElement.textContent = `Step ${historyIndex + 1}: ${historyStep.title}`;
            titleElement.style.color = 'var(--accent-color)';
            titleElement.style.marginBottom = '10px';
            
            // Create the step content
            const historyContent = document.createElement('div');
            historyContent.className = 'previous-step';
            historyContent.innerHTML = historyStep.content;
            
            previousStepContainer.appendChild(titleElement);
            previousStepContainer.appendChild(historyContent);
            
            // Add to the history section
            stepContent.appendChild(previousStepContainer);
        });
        
        // Create current step container
        const currentStepContainer = document.createElement('div');
        currentStepContainer.className = 'current-step-container';
        currentStepContainer.style.marginBottom = '30px';
        currentStepContainer.style.border = '2px solid var(--accent-color)';
        currentStepContainer.style.borderRadius = '8px';
        currentStepContainer.style.padding = '20px';
        currentStepContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        
        // Create title container with flexbox to position icon and text
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        titleContainer.style.marginBottom = '15px';
        
        // Add icon if found in the content
        if (iconMatch) {
            const iconElement = document.createElement('i');
            iconElement.className = iconMatch[1];
            iconElement.style.color = 'var(--accent-color)';
            iconElement.style.fontSize = '2rem';
            iconElement.style.marginRight = '15px';
            iconElement.style.opacity = '0.8';
            titleContainer.appendChild(iconElement);
        }
        
        // Add current step title
        const currentTitleElement = document.createElement('h3');
        currentTitleElement.innerHTML = `${steps[index].title}<br><span style="font-size: 0.8rem;font-style: italic;">Step ${index + 1} of ${steps.length}</span>`;
        currentTitleElement.style.color = 'var(--accent-color)';
        currentTitleElement.style.margin = '0';
        currentTitleElement.style.fontSize = '1.3rem';
        currentTitleElement.style.textAlign = 'left';
        
        titleContainer.appendChild(currentTitleElement);
        
        // Create current step content
        const currentStepElement = document.createElement('div');
        currentStepElement.className = 'current-step';
        currentStepElement.innerHTML = steps[index].content;
        
        // Add title container and content to main container
        currentStepContainer.appendChild(titleContainer);
        currentStepContainer.appendChild(currentStepElement);
        
        // Add to the end of the content (bottom)
        stepContent.appendChild(currentStepContainer);
        
        // Update progress dots
        progressDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Add navigation buttons
        const navContainer = document.createElement('div');
        navContainer.className = 'step-navigation';
        navContainer.style.marginTop = '20px';
        navContainer.style.display = 'flex';
        navContainer.style.justifyContent = 'space-between';
        
        if (index > 0) {
            const prevButton = document.createElement('button');
            prevButton.className = 'step-nav-button prev';
            prevButton.textContent = '← Previous Step';
            prevButton.addEventListener('click', () => {
                // When going back, remove the last item from history
                if (stepHistory.length > 0 && index - 1 === stepHistory[stepHistory.length - 1]) {
                    stepHistory.pop();
                }
                updateStep(index - 1);
            });
            navContainer.appendChild(prevButton);
        } else {
            // Add empty div to maintain spacing when no prev button
            const spacer = document.createElement('div');
            navContainer.appendChild(spacer);
        }
        
        if (index < steps.length - 1) {
            const nextButton = document.createElement('button');
            nextButton.className = 'step-nav-button next';
            nextButton.textContent = 'Next Step →';
            nextButton.addEventListener('click', () => updateStep(index + 1));
            navContainer.appendChild(nextButton);
        }
        
        currentStepElement.appendChild(navContainer);
        
        // Scroll to the current step
        currentStepContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}); 