
export const emergency = [
  //Acute emergencies
  {
    name: "Asthmatic Attack",
    category: "Acute Emergency",
    overview: "During an asthma attack, also called an asthma exacerbation, the airways become swollen and inflamed. The muscles around the airways contract and the airways produce extra mucus, causing the breathing (bronchial) tubes to narrow. \n During an attack, you may cough, wheeze and have trouble breathing. Symptoms of a minor asthma attack get better with prompt home treatment. A severe asthma attack that doesn't improve with home treatment can become a life-threatening emergency.",
    symptoms: ["Severe shortness of breath, chest tightness or pain, and coughing or wheezing", "Low peak expiratory flow (PEF) readings, if you use a peak flow meter", "Symptoms that fail to respond to use of a quick-acting (rescue) inhaler"],
    treatment: ["Move away from all triggers like dust, smoke, perfumes etc", "Take 2 to 3 puffs of your salbutamol inhaler", "If the difficulty in breathing does not improve, get to the nearest hospital immediately."],
    slug: "asthmatic-attack"
  },
  {
    name: "Seizures",
    category: "Acute Emergency",
    overview: "A seizure is a sudden, uncontrolled burst of electrical activity in the brain. It can cause changes in behavior, movements, feelings and levels of consciousness. Having two or more seizures at least 24 hours apart that don't have a known cause is considered to be epilepsy. \n There are many types of seizures, and they have a range of symptoms and severity. Seizure types vary by where they begin in the brain and how far they spread. Most seizures last from 30 seconds to two minutes. A seizure that lasts longer than five minutes is a medical emergency.",
    symptoms: ["Temporary confusion.", "Jerking movements of the arms and legs that can't be controlled.", "Loss of consciousness or awareness.", "A staring spell.", "Cognitive or emotional changes. They may include fear, anxiety or a feeling that you've already lived this moment, known as deja vu."],
    treatment: ["Be calm", "Remove any source of injury from the patient", "Place a soft clothing under the patient's head", "Remove any tight clothing", "Reassure the patient till he/she recovers", "When jerking stops, roll the patient to one side", "See your doctor as soon as possible"],
    slug: "seizures"
  },
  {
    name: "Heart Attack",
    category: "Acute Emergency",
    overview: "A heart attack occurs when the flow of blood to the heart is severely reduced or blocked. The blockage is usually due to a buildup of fat, cholesterol and other substances in the heart (coronary) arteries. The fatty, cholesterol-containing deposits are called plaques. The process of plaque buildup is called atherosclerosis. \n Sometimes, a plaque can rupture and form a clot that blocks blood flow. A lack of blood flow can damage or destroy part of the heart muscle.",
    symptoms: ["Chest pain that may feel like pressure, tightness, pain, squeezing or aching", "Pain or discomfort that spreads to the shoulder, arm, back, neck, jaw, teeth or sometimes the upper belly", "Cold sweat"],
    treatment: ["If patient is unconscious, start cardiopulmonary resuscitation (CPR)", "If still unconscious, shout for help", "continue CPR till medical help arrives", "If patient is conscious, ask patient to sit calm", "Loosen any tight clothing", "If patient is conscious, patient should chew and swallow a tablet of asprin"],
    slug: "heart-attack"
  },
  {
    name: "Stroke",
    category: "Acute Emergency",
    overview: "An ischemic stroke occurs when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. \n A stroke is a medical emergency, and prompt treatment is crucial. Early action can reduce brain damage and other complications.",
    symptoms: ["Trouble speaking and understanding what others are saying.", "Paralysis or numbness of the face, arm or leg.", "Problems seeing in one or both eyes.", "Headache.", "Trouble walking."],
    treatment: ["Take patient immediately to hospital, TIME IS OF ESSENCE."],
    slug: "stroke"
  },
  {
    name: "Sudden Collapse",
    category: "Acute Emergency",
    overview: "Sudden collapse of individuals, also referred to as sudden collapse or sudden incapacitation, is a medical occurrence where a person's physical condition rapidly deteriorates, leading to an abrupt loss of consciousness and often resulting in falling to the ground. \n This phenomenon can be attributed to a variety of underlying medical conditions, ranging from cardiac events to neurological disorders. The sudden collapse of individuals can have severe consequences and necessitates immediate medical attention.",
    symptoms: ["Dizziness or Lightheadedness.", "Loss of Consciousness.", "Nausea.", "Pallor.", "Clamminess or Sweating.", "Weakness or Incoordination.", "Tunnel Vision.", "Hyperventilation."],
    treatment: ["Many things can cause unconsciousness. Please take the patient immediately to the nearest hospital. IME IS KEY."],
    slug: "sudden-collapse"
  },
  {
    name: "Electric Shock",
    category: "Acute Emergency",
    overview: "An electric shock is a sudden and unexpected exposure to an electric current, which can lead to a range of physical and physiological effects on the body. The severity of an electric shock can vary based on factors such as the strength of the current, the duration of exposure, and the path the current takes through the body. \n Electric shocks can result in a spectrum of injuries, from minor discomfort to life-threatening conditions. The effects of an electric shock on the body depend on several factors, including the type of current (direct current or alternating current), the voltage, the pathway of the current through the body, and the duration of exposure.",
    symptoms: ["Muscle Contractions.", "Pain or Discomfort.", "Burns.", "Numbness or Tingling.", "Difficulty Breathing.", "Loss of Consciousness.", "Confusion or Memory Issues.", "Seizures."],
    treatment: ["Ensure you are safe from danger.", "Turn off the source of electricity", "Seek urgent medical attention."],
    slug: "electric-shock"
  },

  //BURNS
  {
    name: "Acid Burns",
    category: "Burns",
    overview: "An acid burn, also known as a chemical burn, occurs when the skin or other body tissues come into contact with acidic substances. These substances can cause damage by breaking down and destroying cells on contact. \n Acid burns are categorized as chemical burns and can vary in severity depending on factors such as the type of acid, the concentration, the duration of exposure, and the amount of affected tissue.",
    symptoms: ["Skin Damage.", "Pain and Irritation.", "Blisters.", "Tissue Destruction.", "Open blisters and damaged skin can create a pathway for bacteria to enter the body, leading to the risk of infection at the burn site.", "Scarring."],
    treatment: ["Wash the affected area with PLENTY amount of water IMMEDIATELY.", "See doctor as soon as possible", "Time is of essence. do not delay!"],
    slug: "acid-burns"
  },
  {
    name: "Dry Heat",
    category: "Burns",
    overview: "Burns from dry heat, also known as thermal burns, occur when the skin and underlying tissues are exposed to high temperatures or flames. These burns result in damage to the skin's structure and can vary in severity based on factors such as the intensity of the heat source, the duration of exposure, and the area of the body affected.",
    symptoms: ["Superficial (First-Degree) Burns: These burns affect only the outermost layer of skin, resulting in redness, pain, and mild swelling.", "Partial-Thickness (Second-Degree) Burns: These burns penetrate deeper into the skin and cause redness, blistering, pain, and swelling.", "Full-Thickness (Third-Degree) Burns: These burns extend through all layers of the skin and often involve underlying tissues. The affected skin may appear white, blackened, or charred. Third-degree burns are less painful initially because the nerve endings are damaged, but they are more serious and require medical attention.", "Fourth-Degree Burns: These burns extend even deeper, affecting muscles, tendons, and bones. The extent of tissue damage is severe, and the affected area might appear dry and leathery. Fourth-degree burns necessitate urgent medical intervention and may require extensive surgical procedures."],
    treatment: ["Step away from the source of the burns.", "Place the affected area under running tap water or a bucket of water for about 10 - 20 minutes. This will reduce the pains and further damage. (Avoid applying iced water)", "Visit the nearest hospital for further care."],
    slug: "dry-heat"
  },
  {
    name: "Hot Oil",
    category: "Burns",
    overview: "Burns from hot oil, also known as scald burns, occur when the skin and underlying tissues are exposed to hot liquid, including oils. These burns result from the transfer of thermal energy from the hot liquid to the skin, causing tissue damage. The severity of a hot oil burn depends on factors such as the temperature of the oil, the amount of oil involved, and the duration of contact.",
    symptoms: ["Superficial (First-Degree) Burns: These burns affect only the outermost layer of skin, resulting in redness, pain, and mild swelling.", "Partial-Thickness (Second-Degree) Burns: These burns penetrate deeper into the skin and cause redness, blistering, pain, and swelling.", "Full-Thickness (Third-Degree) Burns: These burns extend through all layers of the skin and might reach deeper tissues. The affected skin may appear white, blackened, or charred. Third-degree burns are severe and necessitate medical attention.", "These burns are the most severe, often involving muscles, tendons, and bones. The skin might appear dry and leathery, with tissue damage extending far beyond the skin's surface."],
    treatment: ["Step away from the source of the burns.", "Place the affected area under running tap water or a bucket of water for about 10 - 20 minutes. This will reduce the pains and further damage. (Avoid applying iced water)", "Visit the nearest hospital for further care."],
    slug: "hot-oil"
  },
  {
    name: "Hot Water",
    category: "Burns",
    overview: "Burns from hot water, also known as scald burns, occur when the skin and underlying tissues are exposed to hot liquids, including water. These burns result from the transfer of thermal energy from the hot liquid to the skin, causing damage to the skin's structure. The severity of a hot water burn depends on factors such as the temperature of the water, the volume of water involved, and the duration of contact.",
    symptoms: ["Pain.", "Redness and Swelling.", "Blisters.", "Skin Changes.", "Numbness.", "Shock"],
    treatment: ["Step away from the source of the burns.", "Place the affected area under running tap water or a bucket of water for about 10 - 20 minutes. This will reduce the pains and further damage. (Avoid applying iced water)", "Visit the nearest hospital for further care."],
    slug: "hot-water"
  }
]