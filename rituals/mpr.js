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
                    <li><strong>Focus:</strong> Stand with your feet together, arms at your sides.</li>
                    <li><strong>Say:</strong> Take several deep breaths to center yourself.</li>
                    <li><strong>Visualize:</strong> Your body as an empty vessel ready to be filled with divine light.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Kether - Crown Chakra",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-crown" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize a sphere of brilliant white light just above your head.</li>
                    <li><strong>Say:</strong> "EHEIEH" (אהיה, pronounced "Eh-hey-yeh", meaning "I Am").</li>
                    <li><strong>Visualize:</strong> The divine white light of Kether vibrating at the crown of your head.</li>
                    <li><strong>Vibrate:</strong> Intone the name three times, feeling it resonate through your crown chakra.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Daath - Throat Chakra",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-comment" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize a sphere of lavender/violet light at your throat.</li>
                    <li><strong>Say:</strong> "YHVH ELOHIM" (יהוה אלהים, pronounced "Yod-Heh-Vav-Heh El-oh-heem").</li>
                    <li><strong>Visualize:</strong> The light from Kether descending to illuminate your throat center.</li>
                    <li><strong>Vibrate:</strong> Intone the name three times, feeling it resonate through your throat chakra.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Tiphareth - Heart Chakra",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-heart" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize a sphere of golden yellow light at your heart center.</li>
                    <li><strong>Say:</strong> "YHVH ELOAH VE-DAATH" (יהוה אלוה ודעת, pronounced "Yod-Heh-Vav-Heh El-oh-ah Ve-Da'ath").</li>
                    <li><strong>Visualize:</strong> The light from above flowing down to illuminate your heart with radiant golden energy.</li>
                    <li><strong>Vibrate:</strong> Intone the name three times, feeling it resonate through your heart chakra.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Yesod - Sacral Chakra",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-moon" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize a sphere of violet/purple light at your genital area.</li>
                    <li><strong>Say:</strong> "SHADDAI EL CHAI" (שדי אל חי, pronounced "Shah-dai El Chai").</li>
                    <li><strong>Visualize:</strong> The light continuing to flow downward, illuminating your sacral center with violet energy.</li>
                    <li><strong>Vibrate:</strong> Intone the name three times, feeling it resonate through your sacral chakra.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Malkuth - Root Chakra",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-cube" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize a sphere of earthy colors (black, olive, russet, citrine) at your feet.</li>
                    <li><strong>Say:</strong> "ADONAI HA-ARETZ" (אדני הארץ, pronounced "Ah-doh-nai Ha-Ah-retz").</li>
                    <li><strong>Visualize:</strong> The light completing its descent, grounding into the earth through your feet.</li>
                    <li><strong>Vibrate:</strong> Intone the name three times, feeling it resonate through your feet and into the earth.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Circulation of Light: First Circuit",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-sync" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize the light rising from your feet up the right side of your body.</li>
                    <li><strong>Say:</strong> Nothing, maintain silent focus on the energy movement.</li>
                    <li><strong>Visualize:</strong> The light traveling up your right side, over your head, and down your left side to your feet.</li>
                    <li><strong>Feel:</strong> The energy completing a full circuit around your body in a clockwise direction.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Circulation of Light: Second Circuit",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-sync-alt" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize the light rising from your feet up the front of your body.</li>
                    <li><strong>Say:</strong> Nothing, maintain silent focus on the energy movement.</li>
                    <li><strong>Visualize:</strong> The light traveling up your front, over your head, down your back, and under your feet.</li>
                    <li><strong>Feel:</strong> The energy completing a full circuit around your body in a clockwise direction when viewed from your right side.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Circulation of Light: Third Circuit",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-radiation" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize light spiraling around your entire body.</li>
                    <li><strong>Say:</strong> Nothing, maintain silent focus on the energy movement.</li>
                    <li><strong>Visualize:</strong> The light forming a spiral that encompasses your entire being, moving from feet to head and back.</li>
                    <li><strong>Feel:</strong> The energy creating a protective and energizing cocoon of light around you.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Aura Strengthening",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-shield-alt" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Visualize your entire aura filled with divine light.</li>
                    <li><strong>Say:</strong> "I am filled with the divine light of creation."</li>
                    <li><strong>Visualize:</strong> Your aura expanding and strengthening, becoming a perfect sphere of radiant light.</li>
                    <li><strong>Feel:</strong> The energy balancing and harmonizing all aspects of your being.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Grounding",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-tree" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Feel your connection to the earth beneath you.</li>
                    <li><strong>Say:</strong> "I am grounded and centered in divine light."</li>
                    <li><strong>Visualize:</strong> Roots extending from your feet deep into the earth, anchoring the energy you've raised.</li>
                    <li><strong>Feel:</strong> The excess energy flowing into the earth, leaving you balanced and centered.</li>
                </ul>
            </div>
        `
    },
    {
        title: "Completion",
        content: `
            <div class="step-instructions" style="text-align: left;">
                <div class="step-image" style="text-align: center; margin-bottom: 20px;">
                    <i class="fas fa-infinity" style="color: var(--accent-color); opacity: 0.8; font-size: 3rem;"></i>
                </div>
                <ul style="text-align: left; padding-left: 20px;">
                    <li><strong>Focus:</strong> Bring your awareness back to your physical body.</li>
                    <li><strong>Say:</strong> "The ritual is complete."</li>
                    <li><strong>Visualize:</strong> The five centers of light continuing to glow within you, connected by a pillar of light.</li>
                    <li><strong>Feel:</strong> The balanced energy flowing through your entire being, bringing harmony and vitality.</li>
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
            
            // Extract icon for history step
            const historyIconMatch = historyStep.content.match(/<i class="([^"]+)"/);
            
            // Add step title with icon to the history
            const titleContainer = document.createElement('div');
            titleContainer.style.display = 'flex';
            titleContainer.style.alignItems = 'center';
            titleContainer.style.marginBottom = '10px';
            
            // Add icon if found
            if (historyIconMatch) {
                const iconElement = document.createElement('i');
                iconElement.className = historyIconMatch[1];
                iconElement.style.color = 'var(--accent-color)';
                iconElement.style.fontSize = '1.5rem';
                iconElement.style.marginRight = '10px';
                iconElement.style.opacity = '0.8';
                titleContainer.appendChild(iconElement);
            }
            
            // Add title text
            const titleElement = document.createElement('h3');
            titleElement.textContent = `Step ${historyIndex + 1}: ${historyStep.title}`;
            titleElement.style.color = 'var(--accent-color)';
            titleElement.style.margin = '0';
            
            titleContainer.appendChild(titleElement);
            previousStepContainer.appendChild(titleContainer);
            
            // Create the step content (without the step-image div)
            const historyContent = document.createElement('div');
            historyContent.className = 'previous-step';
            
            // Parse the content to remove the step-image div
            let parsedContent = historyStep.content;
            parsedContent = parsedContent.replace(/<div class="step-image"[^>]*>[\s\S]*?<\/div>/g, '');
            historyContent.innerHTML = parsedContent;
            
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
        
        // Create current step content (without the step-image div)
        const currentStepElement = document.createElement('div');
        currentStepElement.className = 'current-step';
        
        // Parse the content to remove the step-image div
        let parsedContent = steps[index].content;
        parsedContent = parsedContent.replace(/<div class="step-image"[^>]*>[\s\S]*?<\/div>/g, '');
        currentStepElement.innerHTML = parsedContent;
        
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