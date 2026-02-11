import React, { useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SharmaLogo from "../../../assets/SharmaLogo.png";
import Logo from "../../../assets/Logo.jpeg";


//sharma
import chiropractorImage from "../../../assets/sharma/1.png";
import Physiotherapy01 from "../../../assets/sharma/2.png";
import Physiotherapy from "../../../assets/sharma/3.png";
import backpain from "../../../assets/sharma/4.png";
import lymphatic from "../../../assets/sharma/5.png";
import sciatic from "../../../assets/sharma/6.png";
import slipdisc from "../../../assets/sharma/7.png";
import arthritis from "../../../assets/sharma/8.png";
import KneePain from "../../../assets/sharma/9.png";
import cervical from "../../../assets/sharma/10.png";
import ShoulderPain from "../../../assets/sharma/11.png";
import neck from "../../../assets/sharma/12.png";
import Cupping from "../../../assets/sharma/13.png";
import sportsMassageImage from "../../../assets/sharma/14.png";
import pain from "../../../assets/sharma/15.png";
import orthopedic from "../../../assets/sharma/16.png";
import parkinsons from "../../../assets/sharma/17.png";
import op from "../../../assets/sharma/18.png";
import Home from "../../../assets/sharma/19.png";
import affordablehome from "../../../assets/sharma/20.png";

//parth






// Location data to get location names



const locationNames = {
  // South Delhi locations
  "golf-links": "Golf Links",
  "jor-bagh": "Jor Bagh",
  "nizamuddin-east": "Nizamuddin East",
  "nizamuddin-west": "Nizamuddin West",
  kalkaji: "kalkaji",
  "nehru-enclave": "Nehru Enclave",
  "kalkaji-dda-flats": "Kalkaji DDA Flats",
  "greater-kailash": "Greater Kailash",
  "cr-park": "CR Park",
  "east-of-kailash": "East of Kailash",
  "south-extension": "South Extension",
  "lajpat-nagar": "Lajpat Nagar",
  "defence-colony": "Defence Colony",
  "green-park": "Green Park",
  "hauz-khas": "Hauz Khas",
  saket: "Saket",
  "malviya-nagar": "Malviya Nagar",
  "nehru-place": "Nehru Place",
  okhla: "Okhla",
  "new-friends-colony": "New Friends Colony",
  moolchand: "Moolchand",
  "kailash-colony": "Kailash Colony",
  alaknanda: "Alaknanda",
  "panchsheel-Park": "Panchsheel Park",
  "safdarjung-enclave": "Safdarjung Enclave",
  "andrews-ganj": "Andrews Ganj",
  "govind-puri": "Govind Puri",
  "maharani-bagh": "Maharani Bagh",
  jangpura: "Jangpura",
  "siri-fort": "Siri Fort",
  "moti-bagh": "Moti Bagh",
  "niti-bagh": "Niti Bagh",
  "sadiq-nagar": "Sadiq Nagar",
  aiims: "AIIMS",
  "ansari-nagar": "Ansari Nagar",
  sda: "SDA",
  "ring-road": "Ring Road",
  "jasola-apollo": "Jasola Apollo",
  "katwaria-sarai": "Katwaria Sarai",
  chanakyapuri: "Chanakyapuri",
  "jln-stadium": "JLN Stadium",
  "kidwai-nagar": "Kidwai Nagar",
  "dakshin-puri": "Dakshin Puri",
  "mahipal-pur": "Mahipal Pur",
  "vasant-kunj": "Vasant Kunj",
  "fatehpur-beri": "Fatehpur Beri",
  mehrauli: "Mehrauli",
  "sarojini-nagar": "Sarojini Nagar",
  "yusuf-sarai": "Yusuf Sarai",
  "aurobindo-marg": "Aurobindo Marg",
  "sheikh-sarai": "Sheikh Sarai",
  "neb-sarai": "Neb Sarai",
  "ignou-road": "IGNOU Road",
  "delhi-haat": "Delhi Haat",
  devli: "Devli",
  tigri: "Tigri",
  khanpur: "Khanpur",
  madangiri: "Madangiri",
  "sant-nagar": "Sant Nagar",
  "sainik-farm": "Sainik Farm",
  ashram: "Ashram",
  "lutyens-delhi": "Lutyens Delhi",
  humayunpur: "Humayunpur",
  "shahpur-jaat": "Shahpur Jaat",
  "sangam-vihar": "Sangam Vihar",
  "chirag-delhi": "Chirag Delhi",
  "kalkaji-block-b": "Kalkaji Block B",
  "kalkaji-block-a": "Kalkaji Block A",
  "kalkaji-block-e": "Kalkaji Block E",
  "kalkaji-block-c": "Kalkaji Block C",
  "kalkaji-block-g": "Kalkaji Block G",
  "kalkaji-block-h": "Kalkaji Block H",
  "kalkaji-block-i": "Kalkaji Block I",
  "kalkaji-block-d": "Kalkaji Block D",
  "kalkaji-block-l": "Kalkaji Block L",
  "kalkaji-block-m": "Kalkaji Block M",
  "kalkaji-block-cc": "Kalkaji Block CC",
  "kalkaji-block-r": "Kalkaji Block R",
  "kalkaji-block-16": "Kalkaji Block 16",
  "kalkaji-block-14": "Kalkaji Block 14",
  "kalkaji-block-17": "Kalkaji Block 17",
  "kalkaji-block-19": "Kalkaji Block 19",
  "kalkaji-extension": "Kalkaji Extension",
  "giri-nagar": "Giri Nagar",
  "shyam-nagar": "Shyam Nagar",
  vinobhapuri: "Vinobhapuri",
  "south-extension-i": "South Extension I",
  "south-extension-ii": "South Extension II",
  "greater-kailash-i": "Greater Kailash I",
  "greater-kailash-i-block-a": "Greater Kailash I Block A",
  "greater-kailash-i-block-b": "Greater Kailash I Block B",
  "greater-kailash-i-block-c": "Greater Kailash I Block C",
  "greater-kailash-i-block-e": "Greater Kailash I Block E",
  "greater-kailash-i-block-m": "Greater Kailash I Block M",
  "greater-kailash-i-block-n": "Greater Kailash I Block N",
  "greater-kailash-i-block-r": "Greater Kailash I Block R",
  "greater-kailash-i-block-s": "Greater Kailash I Block S",
  "greater-kailash-i-block-w": "Greater Kailash I Block W",
  "greater-kailash-ii": "Greater Kailash II",
  "greater-kailash-enclave": "Greater Kailash Enclave",
  "cr-park-block-a": "CR Park Block A",
  "cr-park-block-b": "CR Park Block B",
  "cr-park-block-c": "CR Park Block C",
  "cr-park-block-d": "CR Park Block D",
  "cr-park-block-e": "CR Park Block E",
  "cr-park-block-f": "CR Park Block F",
  "cr-park-block-g": "CR Park Block G",
  "cr-park-block-h": "CR Park Block H",
  "cr-park-block-i": "CR Park Block I",
  "cr-park-block-j": "CR Park Block J",
  "cr-park-block-k": "CR Park Block K",
  "cr-park-block-pocket-k-1": "CR Park Block Pocket K-1",
  "cr-park-block-pocket-40": "CR Park Block Pocket 40",
  "cr-park-block-pocket-52": "CR Park Block Pocket 52",
  "cr-park-block-pocket-m": "CR Park Block Pocket M",
  "cr-park-block-pocket-n": "CR Park Block Pocket N",
  "harkesh-nagar": "Harkesh Nagar",
  "west-land-avenue": "West Land Avenue",
  "adhi-chini": "Adhi Chini",
  "okhla-phase-i": "Okhla Phase I",
  "okhla-phase-ii": "Okhla Phase II",
  "new-friends-colony-east": "New Friends Colony East",
  "new-friends-colony-west": "New Friends Colony West",
  "hauz-khas-enclave": "Hauz Khas Enclave",
  "deer-park": "Deer Park",
  "gulmohar-park": "Gulmohar Park",
  "gautam-nagar": "Gautam Nagar",
  rohini: "Rohini",
  kharera: "Kharera",
  "masjid-moth": "Masjid Moth",
  "shahoorpur-extension": "Shahoorpur Extension",
  kotla: "Kotla",
  "preet-vihar": "Preet Vihar",
  "dera-mandi": "Dera Mandi",
  jamroodpur: "Jamroodpur",
  bhogal: "Bhogal",
  "tughlakbad-railway-colony": "Tughlakbad Railway Colony",
  "pul-pehladpur": "Pul Pehladpur",
  "sewa-nagar": "Sewa Nagar",
  "pragati-maidan": "Pragati Maidan",
  "durga-vihar": "Durga Vihar",
  "sat-beri": "Sat Beri",
  sahoarpur: "Sahoarpur",
  jonapur: "Jonapur",
  "aya-nagar": "Aya Nagar",
  sultanpur: "Sultanpur",
  "ladha-sarai": "Ladha Sarai",
  gadaipur: "Gadaipur",
  khirki: "Khirki",
  "connaught-place": "Connaught Place",
  // Badarpur/Faridabad locations
  badarpur: "Badarpur",
  faridabad: "Faridabad",
  jaitpur: "Jaitpur",
  tughlakabad: "Tughlakabad",
  molarband: "Molarband",
  "sarita-vihar": "Sarita Vihar",
};

// Sharma Orthopedic Services Details
const sharmaServiceDetails = {
  chiropractor: {
    title: "Best Chiropractor",
    description:
      "Expert spinal adjustment and manipulation for pain relief and improved mobility.",
    aboutTitle: "About Chiropractic Care",
    aboutDescription:
      "Chiropractic care is a healthcare profession that focuses on the diagnosis and treatment of neuromuscular disorders, with an emphasis on treatment through manual adjustment and manipulation of the spine. Chiropractors use evidence-based, non-invasive techniques to restore proper alignment, reduce pain, and enhance overall function. Our experienced chiropractors specialize in treating back pain, neck pain, headaches, and various musculoskeletal conditions through drug-free approaches that promote natural healing and long-term wellness.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our expert team assesses your specific condition and creates personalized treatment plans. These include advanced methods like stretching exercises, core strengthening programs, and joint mobilization techniques. We use FDA-approved electrotherapy modalities including LASER Therapy, Shockwave Therapy, Ultrasound Therapy, Kinesiology Taping, Dry Needling, IFT/TENS, and Infrared Therapy to reduce inflammation and provide effective pain relief. Our comprehensive approach emphasizes posture correction to manage symptoms and prevent recurrence. We focus on accurate diagnosis, personalized care, and evidence-based treatment to ensure long-term relief and faster recovery. Our goal extends beyond pain relief – we aim to restore your strength, mobility, and confidence in daily life.",
    benefits: [
      "Reduced pain and inflammation in spine and joints",
      "Improved range of motion and flexibility",
      "Enhanced nervous system function",
      "Better posture and spinal alignment",
      "Relief from headaches and migraines",
      "Increased strength and stability",
      "Prevention of further spinal degeneration",
      "Improved athletic performance",
      "Enhanced blood circulation",
      "Natural pain relief without medication",
      "Faster recovery from injuries",
      "Long-term wellness and health maintenance",
    ],
    features: [
      "Certified and experienced chiropractors",
      "Advanced spinal adjustment techniques",
      "Personalized treatment protocols",
      "State-of-the-art diagnostic equipment",
    ],
    image:
      chiropractorImage,
    icon: "🦴",
  },

  "physiotherapy-center": {
    title: "Best Physiotherapy Center",
    description:
      "Complete physiotherapy services with modern equipment and expert therapists.",
    aboutTitle: "About Our Physiotherapy Center",
    aboutDescription:
      "Our state-of-the-art physiotherapy center offers comprehensive rehabilitation and therapeutic services for all musculoskeletal, neurological, and sports-related conditions. Equipped with the latest technology and staffed by highly trained physiotherapists, we provide evidence-based treatments tailored to each patient's unique needs. From acute injuries to chronic pain management, our center is designed to deliver superior care in a comfortable, welcoming environment.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we combine traditional physiotherapy expertise with cutting-edge technology. Our treatment plans incorporate therapeutic exercises, manual therapy, and advanced modalities like LASER Therapy, Shockwave Therapy, Ultrasound, Dry Needling, and TENS to accelerate healing. We specialize in treating sports injuries, post-surgical rehabilitation, chronic pain conditions, and neurological disorders. Every patient receives a comprehensive assessment followed by a customized treatment program designed to achieve optimal recovery. Our multidisciplinary approach ensures you receive the highest standard of care throughout your rehabilitation journey.",
    benefits: [
      "Access to advanced physiotherapy equipment",
      "Experienced and certified physiotherapists",
      "Comprehensive initial assessment",
      "Personalized treatment plans",
      "Evidence-based therapeutic techniques",
      "Pain management and rehabilitation",
      "Post-surgical recovery programs",
      "Sports injury rehabilitation",
      "Chronic condition management",
      "Preventive care and wellness programs",
    ],
    features: [
      "Modern therapeutic equipment",
      "Multidisciplinary team approach",
      "Clean and comfortable facility",
      "Flexible appointment scheduling",
    ],
    image:
      Physiotherapy01,
    icon: "🏥",
  },

  "back-pain-treatment": {
    title: "Best Back Pain Treatment",
    description:
      "Specialized treatment for all types of back pain using proven therapeutic methods.",
    aboutTitle: "About Back Pain",
    aboutDescription:
      "Back pain is one of the most common health complaints affecting people of all ages. It can range from mild discomfort to severe, debilitating pain that impacts daily activities. Back pain typically occurs due to poor posture, prolonged sitting or standing, improper lifting techniques, muscle weakness, injury, or spinal disorders. The pain may be acute (sudden onset) or chronic (lasting more than three months), and can significantly affect your quality of life, making simple tasks like bending, walking, or even sitting uncomfortable.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we specialize in comprehensive back pain treatment using evidence-based approaches. Our expert physiotherapists conduct thorough assessments to identify the root cause of your pain, whether it's muscle strain, disc problems, nerve compression, or postural issues. Treatment includes targeted manual therapy, spinal mobilization, core strengthening exercises, and postural correction programs. We utilize advanced FDA-approved modalities including LASER Therapy for deep tissue healing, Shockwave Therapy for chronic pain, Ultrasound Therapy to reduce inflammation, Dry Needling for trigger point release, and TENS for immediate pain relief. Our holistic approach not only addresses current pain but also focuses on preventing future episodes through patient education, ergonomic advice, and home exercise programs. We aim to restore your mobility, strengthen your spine's supporting muscles, and help you return to pain-free living.",
    benefits: [
      "Significant reduction in pain and inflammation",
      "Improved spinal mobility and flexibility",
      "Increased core and back muscle strength",
      "Better posture and spinal alignment",
      "Enhanced functional capacity for daily activities",
      "Prevention of future back problems",
      "Improved quality of life",
      "Non-surgical treatment alternative",
      "Faster return to work and sports",
      "Long-term pain management strategies",
    ],
    features: [
      "Comprehensive spine assessment",
      "Multi-modal treatment approach",
      "Personalized exercise programs",
      "Ergonomic and lifestyle guidance",
    ],
    image: backpain,
    icon: "🔙",
  },

  "lymphatic-massage-therapist": {
    title: "Best Lymphatic Massage Therapist",
    description:
      "Gentle manual therapy to reduce swelling and promote healing.",
    aboutTitle: "About Lymphatic Drainage Therapy",
    aboutDescription:
      "Lymphatic drainage therapy is a specialized, gentle massage technique designed to stimulate the lymphatic system and encourage the natural drainage of lymph fluid. This therapeutic approach is highly effective for reducing post-surgical swelling, managing lymphedema, treating sports injuries, and supporting the body's natural detoxification processes. The treatment uses light, rhythmic strokes to move excess fluid from tissues back into the lymphatic vessels, promoting healing and reducing discomfort.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our certified lymphatic drainage specialists provide expert care using gentle, precise manual techniques. This therapy is particularly beneficial for patients recovering from surgery, those with chronic swelling conditions, athletes managing soft tissue injuries, and individuals seeking detoxification support. Our therapists are trained in advanced lymphatic drainage methods that follow the natural flow of the lymphatic system. Treatment sessions are customized to address your specific needs, whether it's post-operative care, injury recovery, or wellness maintenance. We often combine lymphatic drainage with other therapeutic modalities to enhance overall treatment outcomes. The therapy is relaxing, pain-free, and suitable for all ages, making it an excellent choice for those seeking gentle yet effective healing.",
    benefits: [
      "Reduced swelling and edema",
      "Improved lymphatic circulation",
      "Enhanced immune system function",
      "Faster post-surgical recovery",
      "Natural detoxification support",
      "Relief from chronic inflammation",
      "Reduced scar tissue formation",
      "Improved skin health and appearance",
      "Better tissue healing and regeneration",
      "Relaxation and stress reduction",
    ],
    features: [
      "Certified lymphatic drainage specialists",
      "Gentle and effective techniques",
      "Customized treatment protocols",
      "Suitable for all ages",
    ],
    image:
     lymphatic,
    icon: "💆",
  },

  "sciatica-pain-treatment": {
    title: "Best Sciatica Pain Treatment",
    description:
      "Targeted treatment for sciatic nerve pain and related symptoms.",
    aboutTitle: "About Sciatica Pain",
    aboutDescription:
      "Sciatica is a condition characterized by pain that radiates along the path of the sciatic nerve, which extends from the lower back through the hips and buttocks and down each leg. The pain typically affects only one side of the body and can range from mild discomfort to sharp, burning sensations. Common symptoms include radiating leg pain, numbness, tingling, and muscle weakness. Sciatica usually occurs when the sciatic nerve becomes compressed due to a herniated disc, bone spur, or spinal stenosis.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we offer specialized sciatica treatment programs that address both symptoms and underlying causes. Our expert physiotherapists use a combination of manual therapy techniques including neural mobilization to improve nerve mobility, spinal decompression to relieve pressure on the nerve root, and the McKenzie Method for directional preference exercises. Treatment incorporates targeted stretching to release tight muscles, progressive strengthening exercises to stabilize the spine, and core training to prevent recurrence. We utilize advanced therapeutic modalities including LASER Therapy for deep tissue healing, Shockwave Therapy for chronic cases, Ultrasound to reduce inflammation around the nerve, Dry Needling for trigger point release, and TENS for immediate pain relief. Our comprehensive approach also includes posture correction, ergonomic education, and home exercise programs. Most patients experience significant relief within the first few sessions, with continued improvement through our structured rehabilitation protocol.",
    benefits: [
      "Relief from radiating leg pain",
      "Reduced numbness and tingling sensations",
      "Improved nerve mobility and function",
      "Better functional movement patterns",
      "Enhanced lower back and core strength",
      "Prevention of future sciatic episodes",
      "Improved posture and spinal alignment",
      "Increased walking and sitting tolerance",
      "Better quality of life",
      "Non-surgical treatment option",
    ],
    features: [
      "Specialized nerve mobilization techniques",
      "McKenzie method protocols",
      "Advanced pain management",
      "Comprehensive rehabilitation program",
    ],
    image:
       sciatic,
    icon: "⚡",
  },

  "slip-disc-treatment": {
    title: "Best Slip Disc Treatment",
    description: "Conservative treatment for herniated and bulging discs.",
    aboutTitle: "About Slip Disc",
    aboutDescription:
      "A slipped disc, also known as a herniated or prolapsed disc, occurs when the soft gel-like center of a spinal disc pushes through a tear in the tough outer layer. This can compress nearby spinal nerves, causing pain, numbness, tingling, and weakness in the arms or legs depending on the location of the affected disc. Slip disc can occur in the neck (cervical spine) or lower back (lumbar spine) and is often caused by age-related degeneration, improper lifting, sudden twisting movements, or trauma.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we specialize in non-surgical slip disc treatment with proven success rates. Our comprehensive approach begins with detailed assessment using clinical tests and imaging analysis to determine the exact location and severity of disc herniation. Treatment combines the McKenzie Method for directional preference, spinal decompression therapy to reduce disc pressure, manual therapy for pain relief and mobility, and progressive core stabilization exercises to support the spine. We use advanced therapeutic modalities including LASER Therapy for accelerated healing, Shockwave Therapy for chronic cases, Ultrasound to reduce inflammation, and TENS for pain control. Our treatment protocols are designed to retract the disc herniation, relieve nerve compression, strengthen supporting muscles, and prevent recurrence. We also provide education on proper body mechanics, lifting techniques, and ergonomic modifications. Many patients avoid surgery through our conservative treatment approach, experiencing significant improvement in pain and function within weeks.",
    benefits: [
      "Non-surgical treatment alternative",
      "Reduced disc pressure and herniation",
      "Significant pain relief",
      "Improved spinal mobility and function",
      "Strengthened core and back muscles",
      "Prevention of surgical intervention",
      "Faster return to normal activities",
      "Long-term spine stability",
      "Better quality of life",
      "Cost-effective treatment option",
    ],
    features: [
      "McKenzie method certification",
      "Spinal decompression therapy",
      "Advanced imaging analysis",
      "Comprehensive rehabilitation protocols",
    ],
    image:
      slipdisc,
    icon: "💿",
  },

  "arthritis-treatment": {
    title: "Best Arthritis Treatment",
    description:
      "Comprehensive care for all types of arthritis and joint inflammation.",
    aboutTitle: "About Arthritis",
    aboutDescription:
      "Arthritis is a common condition causing joint pain, stiffness, swelling, and reduced mobility. It affects millions of people worldwide and can occur in any joint of the body. The two most common types are osteoarthritis (wear-and-tear arthritis) and rheumatoid arthritis (an autoimmune condition). Symptoms typically include morning stiffness, joint pain that worsens with activity, swelling, reduced range of motion, and difficulty performing daily tasks. Arthritis can significantly impact quality of life, making simple activities like walking, climbing stairs, or gripping objects challenging.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we provide specialized arthritis management programs tailored to your specific type and severity of arthritis. Our comprehensive treatment approach includes gentle joint mobilization to improve range of motion, therapeutic exercises to strengthen muscles around affected joints, balance and stability training to prevent falls, and manual therapy for pain relief. We utilize advanced modalities including LASER Therapy to reduce inflammation, Ultrasound Therapy for deep tissue healing, TENS for pain management, and Shockwave Therapy for chronic cases. Treatment also includes hydrotherapy for low-impact exercise, heat and cold therapy for symptom management, and assistive device recommendations when needed. Our physiotherapists work closely with you to develop sustainable exercise programs that can be continued at home. We also provide education on joint protection techniques, activity modification, weight management, and lifestyle adjustments to slow disease progression. The goal is to reduce pain, improve function, maintain independence, and enhance your overall quality of life despite arthritis.",
    benefits: [
      "Reduced joint pain and stiffness",
      "Improved joint mobility and flexibility",
      "Enhanced muscle strength around joints",
      "Better balance and stability",
      "Reduced inflammation and swelling",
      "Improved functional independence",
      "Slowed disease progression",
      "Better quality of life",
      "Increased daily activity tolerance",
      "Natural pain management strategies",
    ],
    features: [
      "Specialized arthritis assessment",
      "Gentle joint mobilization techniques",
      "Customized exercise programs",
      "Education on self-management",
    ],
    image:
      arthritis,
    icon: "🦴",
  },

  "knee-pain-treatment": {
    title: "Best Knee Pain Treatment",
    description: "Expert treatment for all knee conditions and injuries.",
    aboutTitle: "About Knee Pain",
    aboutDescription:
      "Knee pain is a common complaint affecting people of all ages and activity levels. It can result from various causes including acute injuries (ligament tears, meniscus damage), overuse conditions (runner's knee, tendinitis), arthritis, biomechanical issues, or age-related degeneration. Symptoms may include pain with movement, swelling, stiffness, instability, clicking sounds, or difficulty bearing weight. Knee pain can significantly limit daily activities like walking, climbing stairs, sitting, or participating in sports and exercise.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we offer comprehensive knee pain treatment programs for all types of knee conditions. Our expert assessment identifies the specific cause of your knee pain through clinical tests, movement analysis, and biomechanical evaluation. Treatment includes targeted manual therapy for pain relief and joint mobility, progressive strengthening exercises for quadriceps, hamstrings, and hip muscles, patellar mobilization techniques, balance and proprioception training, and gait retraining when needed. We use advanced therapeutic modalities including LASER Therapy for accelerated healing, Shockwave Therapy for chronic tendon issues, Ultrasound Therapy to reduce inflammation, Kinesiology Taping for support and pain relief, and TENS for immediate comfort. Our rehabilitation programs are customized based on your condition, whether it's post-surgical recovery, sports injury, arthritis management, or general knee pain. We also provide education on proper footwear, activity modification, weight management, and injury prevention strategies. Our goal is to restore pain-free knee function, improve stability, and help you return to your desired activity level.",
    benefits: [
      "Significant reduction in knee pain",
      "Improved knee stability and strength",
      "Enhanced range of motion",
      "Better walking and climbing ability",
      "Reduced swelling and inflammation",
      "Prevention of future injuries",
      "Improved sports performance",
      "Faster post-surgical recovery",
      "Better quality of life",
      "Long-term knee health",
    ],
    features: [
      "Comprehensive knee assessment",
      "Advanced strengthening protocols",
      "Biomechanical analysis",
      "Sport-specific rehabilitation",
    ],
    image:
      KneePain,
    icon: "🦵",
  },

  "cervical-pain-treatment": {
    title: "Best Cervical Pain Treatment",
    description:
      "Specialized treatment for neck and cervical spine conditions.",
    aboutTitle: "About Cervical Pain",
    aboutDescription:
      "Cervical pain, commonly known as neck pain, affects the cervical spine (the upper seven vertebrae of the spine). It can range from mild discomfort to severe pain that radiates into the shoulders, arms, and hands. Common causes include poor posture (especially from prolonged computer or phone use), muscle strain, cervical disc herniation, whiplash injuries, arthritis, or nerve compression. Symptoms may include neck stiffness, reduced range of motion, headaches, shoulder pain, arm numbness or tingling, and difficulty with daily activities like driving or working.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we specialize in treating all types of cervical spine conditions. Our comprehensive cervical pain treatment begins with thorough assessment to identify the exact cause—whether muscular, disc-related, postural, or neurological. Treatment includes advanced manual therapy techniques for immediate pain relief, cervical mobilization and manipulation when appropriate, deep tissue massage for muscle tension, and nerve mobilization for radiating symptoms. We implement targeted exercises for neck strengthening, postural correction programs, and ergonomic modifications for work and daily activities. Our advanced therapeutic modalities include LASER Therapy for deep tissue healing, Shockwave Therapy for chronic neck pain, Ultrasound to reduce inflammation, Dry Needling for trigger point release, cervical traction for disc-related issues, and TENS for pain management. We also provide education on proper sleeping positions, computer ergonomics, and stress management techniques. Whether you're dealing with acute neck pain, chronic cervical problems, or recovering from whiplash injury, our evidence-based approach ensures effective relief and long-term cervical spine health.",
    benefits: [
      "Relief from neck pain and stiffness",
      "Improved cervical spine mobility",
      "Reduced headaches and dizziness",
      "Better posture and alignment",
      "Enhanced neck muscle strength",
      "Prevention of chronic neck problems",
      "Improved shoulder and arm function",
      "Better sleep quality",
      "Increased work productivity",
      "Long-term cervical spine health",
    ],
    features: [
      "Cervical spine specialization",
      "Advanced manual therapy techniques",
      "Postural correction programs",
      "Ergonomic assessment and advice",
    ],
    image:
      cervical,
    icon: "🔝",
  },

  "shoulder-pain-treatment": {
    title: "Best Shoulder Pain Treatment",
    description: "Comprehensive care for shoulder injuries and conditions.",
    aboutTitle: "About Shoulder Pain",
    aboutDescription:
      "Shoulder pain is a common problem that can significantly limit your ability to work, exercise, and perform daily activities. The shoulder is a complex ball-and-socket joint with extensive range of motion, making it vulnerable to various injuries and conditions. Common causes include rotator cuff tears or tendinitis, frozen shoulder (adhesive capsulitis), shoulder impingement syndrome, labral tears, bursitis, arthritis, and post-surgical complications. Symptoms may include pain with overhead activities, difficulty sleeping on the affected side, weakness, reduced range of motion, clicking or popping sounds, and shoulder instability.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we provide specialized shoulder rehabilitation programs for all shoulder conditions. Our expert physiotherapists conduct comprehensive shoulder assessments including range of motion testing, strength evaluation, special clinical tests, and movement analysis to identify the specific problem. Treatment incorporates manual therapy techniques for pain relief and joint mobility, rotator cuff strengthening protocols using progressive resistance, scapular stabilization exercises, stretching programs for flexibility, and functional training for daily activities and sports. We utilize advanced therapeutic modalities including LASER Therapy for accelerated healing, Shockwave Therapy for chronic tendon problems, Ultrasound Therapy to reduce inflammation, Dry Needling for trigger point release, and Kinesiology Taping for support and pain relief. Whether you're recovering from rotator cuff repair surgery, managing frozen shoulder, or dealing with sports-related shoulder injuries, our evidence-based programs are designed to restore full shoulder function, eliminate pain, and prevent recurrence. We also provide education on proper lifting techniques, shoulder-friendly exercises, and injury prevention strategies.",
    benefits: [
      "Significant pain reduction",
      "Improved shoulder range of motion",
      "Enhanced rotator cuff strength",
      "Better shoulder stability",
      "Restored functional activities",
      "Prevention of chronic problems",
      "Faster return to sports and work",
      "Improved posture",
      "Better sleep quality",
      "Long-term shoulder health",
    ],
    features: [
      "Specialized shoulder assessment",
      "Rotator cuff strengthening protocols",
      "Manual therapy expertise",
      "Sport-specific rehabilitation",
    ],
    image:
      ShoulderPain,
    icon: "💪",
  },

  "neck-spasm-treatment": {
    title: "Best Neck Spasm Treatment",
    description: "Rapid relief from painful neck muscle spasms and tension.",
    aboutTitle: "About Neck Spasm",
    aboutDescription:
      "Neck spasms are sudden, involuntary contractions of neck muscles that can cause severe pain and restricted movement. These painful episodes often result from stress, poor posture, prolonged computer use, sudden movements, sleeping in awkward positions, or underlying cervical spine problems. Symptoms include sharp or stabbing neck pain, muscle tightness, limited ability to turn the head, headaches, and sometimes pain radiating to the shoulders. Neck spasms can be extremely debilitating, affecting work, sleep, and daily activities.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we provide rapid and effective treatment for neck spasms using specialized manual therapy techniques. Our approach begins with immediate pain relief through gentle soft tissue mobilization, trigger point therapy to release muscle knots, muscle energy techniques to reduce spasm, and heat therapy for muscle relaxation. We use advanced modalities including TENS for immediate pain control, Ultrasound Therapy to reduce muscle tension, Dry Needling for deep trigger point release, and Infrared Therapy for muscle relaxation. Treatment also includes gentle stretching exercises, postural correction, and stress management education to prevent recurrence. We identify and address the underlying causes of neck spasms, whether they're related to poor ergonomics, stress, muscle weakness, or cervical spine dysfunction. Our therapists provide education on proper sleeping positions, workspace ergonomics, relaxation techniques, and preventive exercises. Most patients experience significant relief within the first treatment session, with complete resolution achieved through our comprehensive management program.",
    benefits: [
      "Rapid relief from muscle spasms",
      "Reduced neck pain and tension",
      "Improved neck mobility",
      "Relief from associated headaches",
      "Better muscle relaxation",
      "Prevention of future spasms",
      "Improved sleep quality",
      "Reduced stress and anxiety",
      "Better work performance",
      "Long-term neck health",
    ],
    features: [
      "Immediate spasm relief techniques",
      "Trigger point therapy",
      "Stress management education",
      "Preventive exercise programs",
    ],
    image:
      neck,
    icon: "😣",
  },

  "cupping-therapy": {
    title: "Best Cupping Therapy",
    description: "Traditional cupping therapy for pain relief and healing.",
    aboutTitle: "About Cupping Therapy",
    aboutDescription:
      "Cupping therapy is an ancient healing technique that uses suction cups placed on the skin to increase blood flow, release muscle tension, and promote healing. This traditional therapy has been used for thousands of years and is now gaining recognition in modern sports medicine and rehabilitation. The suction created by the cups draws blood to the affected area, promoting circulation, reducing inflammation, and facilitating the body's natural healing processes. Cupping is effective for treating various musculoskeletal conditions, chronic pain, sports injuries, and muscle tension.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our certified therapists use both dry cupping and wet cupping (hijama) methods based on your specific needs. Dry cupping involves placing cups on the skin to create suction, while wet cupping involves making small incisions before applying cups to remove stagnant blood. We use modern, sterile equipment and follow strict hygiene protocols to ensure safe, effective treatment. Cupping therapy is often integrated with other treatment modalities for enhanced results. It's particularly effective for chronic back pain, neck pain, shoulder tension, sports injuries, myofascial pain syndrome, and fibromyalgia. The therapy works by improving local blood circulation, releasing deep muscle tension, breaking down scar tissue, and triggering the body's natural healing response. Our therapists customize the cupping technique, cup size, suction intensity, and treatment duration based on your condition and tolerance. While some temporary marks may appear on the skin, they're painless and typically fade within a few days.",
    benefits: [
      "Deep tissue pain relief",
      "Improved blood circulation",
      "Release of muscle tension and knots",
      "Reduced inflammation",
      "Enhanced tissue healing",
      "Natural healing promotion",
      "Relief from chronic pain",
      "Improved muscle recovery",
      "Reduced muscle soreness",
      "Better overall wellness",
    ],
    features: [
      "Certified cupping therapists",
      "Sterile equipment and techniques",
      "Both dry and wet cupping options",
      "Integrated treatment approach",
    ],
    image:
     Cupping,
    icon: "🫙",
  },

  "sports-massage-therapy": {
    title: "Best Sports Massage Therapy",
    description: "Specialized massage for athletes and active individuals.",
    aboutTitle: "About Sports Massage",
    aboutDescription:
      "Sports massage therapy is a specialized form of massage designed specifically for athletes and physically active individuals. It combines various massage techniques including deep tissue work, compression, friction, and stretching to address the unique needs of those engaged in regular physical activity or sports. Unlike general relaxation massage, sports massage targets specific muscle groups used during athletic performance, helps prevent injuries, enhances recovery, and optimizes athletic performance. It can be applied before events (pre-event), after events (post-event), during training, or as part of rehabilitation.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our certified sports massage therapists have extensive experience working with athletes across various sports and fitness levels. We provide tailored massage protocols for different stages of training and competition. Pre-event sports massage uses stimulating techniques to prepare muscles for activity, increase circulation, and improve flexibility. Post-event massage focuses on recovery, reducing muscle soreness, removing metabolic waste products, and preventing delayed onset muscle soreness (DOMS). Maintenance sports massage during training helps identify and address potential problem areas before they become injuries. Our therapists use advanced techniques including deep tissue massage for chronic muscle tension, trigger point therapy for pain relief, myofascial release for fascial restrictions, and assisted stretching for improved flexibility. Treatment is customized based on your sport, training schedule, competition timeline, and specific muscle groups involved. We work closely with coaches and trainers to integrate massage therapy into your overall training program for optimal results.",
    benefits: [
      "Enhanced athletic performance",
      "Faster recovery from training",
      "Prevention of sports injuries",
      "Reduced muscle soreness and fatigue",
      "Improved flexibility and range of motion",
      "Optimized training outcomes",
      "Better muscle tissue health",
      "Reduced risk of overuse injuries",
      "Improved circulation and oxygen delivery",
      "Enhanced mental focus and relaxation",
    ],
    features: [
      "Certified sports massage therapists",
      "Sport-specific techniques",
      "Pre and post-event massage",
      "Customized treatment plans",
    ],
    image:
      sportsMassageImage,
    icon: "⚽",
  },

  "pain-relief-treatment": {
    title: "Best Pain Relief Treatment",
    description:
      "Comprehensive pain management for acute and chronic conditions.",
    aboutTitle: "About Pain Relief",
    aboutDescription:
      "Pain relief treatment encompasses a comprehensive approach to managing both acute and chronic pain conditions without relying solely on medication. Whether you're experiencing sudden injury-related pain or dealing with long-standing chronic pain that has affected your quality of life for months or years, effective pain management is crucial for recovery and well-being. Pain can result from various causes including injuries, surgeries, arthritis, nerve problems, muscle conditions, or chronic diseases. Our drug-free approach focuses on addressing the root cause of pain while providing immediate symptom relief.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we provide multi-modal pain management programs that combine the most effective evidence-based techniques. Our comprehensive approach includes manual therapy for immediate pain relief, therapeutic exercises to address underlying dysfunction, postural correction to reduce pain triggers, and patient education for self-management. We utilize advanced pain-relieving modalities including LASER Therapy for deep tissue healing and pain reduction, Shockwave Therapy for chronic pain conditions, TENS for immediate pain control, Ultrasound Therapy to reduce inflammation, Dry Needling for myofascial pain, and heat/cold therapy for symptom management. Treatment is individualized based on your pain type (nociceptive, neuropathic, or mixed), pain duration (acute or chronic), pain location, and impact on function. We also incorporate pain neuroscience education to help you understand your pain and develop better coping strategies. Our goal is not just to mask pain but to restore function, improve quality of life, and provide you with tools for long-term pain management. We work collaboratively with you to set realistic goals and monitor progress throughout treatment.",
    benefits: [
      "Effective pain reduction",
      "Drug-free pain management",
      "Improved functional capacity",
      "Better quality of life",
      "Enhanced mobility and flexibility",
      "Better pain coping strategies",
      "Reduced reliance on pain medication",
      "Improved sleep quality",
      "Increased activity levels",
      "Long-term pain relief",
    ],
    features: [
      "Multi-modal pain management",
      "Advanced therapeutic techniques",
      "Personalized treatment protocols",
      "Pain education and self-management",
    ],
    image:
     pain,
    icon: "🩹",
  },

  "orthopedic-rehab": {
    title: "Best Orthopedic Rehabilitation",
    description:
      "Specialized rehabilitation for orthopedic conditions and surgeries.",
    aboutTitle: "About Orthopedic Rehabilitation",
    aboutDescription:
      "Orthopedic rehabilitation is a specialized branch of physical therapy focused on the treatment of musculoskeletal injuries and conditions affecting bones, joints, muscles, ligaments, and tendons. This includes rehabilitation after orthopedic surgeries (joint replacements, fracture repairs, ligament reconstructions), management of fractures and dislocations, treatment of sports injuries, and recovery from musculoskeletal trauma. Proper orthopedic rehabilitation is essential for regaining strength, mobility, and function while preventing complications and reducing recovery time.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we provide comprehensive orthopedic rehabilitation programs guided by evidence-based protocols and the latest research in musculoskeletal recovery. Our programs begin with thorough assessment of your condition, surgical reports (if applicable), current functional limitations, and rehabilitation goals. Treatment is structured in progressive phases: initial phase focuses on pain control, swelling reduction, and protecting healing tissues; intermediate phase emphasizes restoring range of motion, beginning strengthening exercises, and improving functional mobility; advanced phase includes intensive strengthening, proprioceptive training, functional activities, and sport-specific training when applicable. We use advanced modalities including LASER Therapy for accelerated tissue healing, Shockwave Therapy for chronic tendon issues, Ultrasound for inflammation reduction, TENS for pain management, and therapeutic exercises progressing from passive to active-assisted to active-resistive. Our therapists work closely with orthopedic surgeons to ensure rehabilitation aligns with surgical protocols and healing timelines. We also provide education on home exercises, activity modification, and injury prevention strategies for long-term success.",
    benefits: [
      "Faster post-surgical recovery",
      "Improved joint mobility and function",
      "Enhanced muscle strength",
      "Better balance and coordination",
      "Reduced pain and swelling",
      "Comprehensive recovery support",
      "Prevention of complications",
      "Optimized surgical outcomes",
      "Faster return to activities",
      "Long-term musculoskeletal health",
    ],
    features: [
      "Specialized orthopedic expertise",
      "Post-surgical protocols",
      "Progressive rehabilitation programs",
      "Functional outcome focus",
    ],
    image:
     orthopedic,
    icon: "🦴",
  },

  "parkinsons-treatment": {
    title: "Best Parkinson's Treatment",
    description:
      "Specialized physiotherapy for Parkinson's disease management.",
    aboutTitle: "About Parkinson's Treatment",
    aboutDescription:
      "Parkinson's disease is a progressive neurological disorder affecting movement, balance, and coordination. Common symptoms include tremors (shaking), bradykinesia (slowness of movement), rigidity (muscle stiffness), postural instability, and gait problems. While there's no cure for Parkinson's, specialized physiotherapy plays a crucial role in managing symptoms, maintaining independence, slowing functional decline, and improving quality of life. Early and consistent physiotherapy intervention has been shown to significantly benefit Parkinson's patients by addressing movement difficulties and preventing secondary complications.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, we provide specialized neurological physiotherapy programs designed specifically for Parkinson's disease management. Our therapists are trained in evidence-based Parkinson's treatment approaches including LSVT BIG (Lee Silverman Voice Treatment - BIG), which focuses on high-amplitude movements to counteract the small, shuffling movements characteristic of Parkinson's. Treatment includes targeted exercises for improving movement amplitude and speed, balance training to prevent falls (a major concern for Parkinson's patients), gait training to address shuffling gait and freezing episodes, flexibility exercises to reduce rigidity, and functional task training for activities of daily living. We use cueing strategies (visual, auditory, and tactile cues) to help overcome movement difficulties and freezing episodes. Treatment also addresses specific Parkinson's symptoms such as stooped posture through postural exercises, reduced arm swing during walking, difficulty with bed mobility and transfers, and cognitive aspects of movement. We work on dual-task training to improve the ability to walk while performing cognitive tasks. Our programs include exercises that can be performed at home, and we provide education and training for caregivers. We also collaborate with neurologists, speech therapists, and occupational therapists for comprehensive care.",
    benefits: [
      "Improved mobility and movement",
      "Better balance and fall prevention",
      "Enhanced coordination and dexterity",
      "Reduced rigidity and stiffness",
      "Improved gait and walking ability",
      "Slowed disease progression",
      "Better posture and alignment",
      "Increased independence in daily activities",
      "Improved confidence and quality of life",
      "Reduced risk of falls and injuries",
    ],
    features: [
      "Neurological physiotherapy specialists",
      "LSVT BIG certified therapists",
      "Parkinson's-specific protocols",
      "Caregiver education and support",
    ],
    image:
     parkinsons,
    icon: "🧠",
  },

  "post-op-physiotherapy-treatment": {
    title: "Best Post-Op Physiotherapy Treatment",
    description:
      "Comprehensive post-operative rehabilitation for optimal recovery.",
    aboutTitle: "About Post-Op Physiotherapy",
    aboutDescription:
      "Post-operative physiotherapy is essential rehabilitation that begins after surgical procedures to ensure optimal recovery, prevent complications, and restore function. Whether you've undergone orthopedic surgery (joint replacement, ACL reconstruction, rotator cuff repair), abdominal surgery, cardiac surgery, or any other surgical procedure, early and appropriate physiotherapy can significantly impact your recovery timeline and final outcomes. Post-op rehabilitation helps prevent complications such as blood clots, pneumonia, muscle atrophy, joint stiffness, and adhesions while promoting proper healing and return to normal activities.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our post-operative rehabilitation programs are designed in collaboration with surgeons and follow established surgical protocols for each procedure type. Treatment typically begins within the first few days after surgery (depending on the procedure) and progresses through carefully planned phases. Initial phase focuses on pain management using TENS, ice therapy, and gentle positioning; preventing complications through breathing exercises, circulation exercises, and early mobilization when appropriate; and protecting healing tissues through proper movement education. Intermediate phase emphasizes gradual restoration of range of motion through gentle stretching and mobilization, beginning strengthening exercises using progressive resistance, reducing swelling through manual lymphatic drainage and compression, and improving functional mobility for daily activities. Advanced phase includes intensive strengthening programs, proprioceptive and balance training, functional activity training, and return-to-sport protocols when applicable. We use advanced therapeutic modalities including LASER Therapy for accelerated tissue healing, Ultrasound to reduce scar tissue formation, and Shockwave Therapy for stubborn adhesions. Our therapists provide clear education on wound care, activity restrictions, exercise progression, and warning signs of complications.",
    benefits: [
      "Faster post-surgical recovery",
      "Reduced pain and discomfort",
      "Prevention of complications",
      "Improved surgical outcomes",
      "Enhanced healing process",
      "Comprehensive recovery support",
      "Reduced scar tissue formation",
      "Better functional outcomes",
      "Faster return to activities",
      "Improved long-term results",
    ],
    features: [
      "Post-surgical specialists",
      "Early mobilization protocols",
      "Progressive rehabilitation phases",
      "Close coordination with surgeons",
    ],
    image:
    op,
    icon: "🏥",
  },

  "home-physiotherapy": {
    title: "Best Home Physiotherapy",
    description:
      "Professional physiotherapy services in the comfort of your home.",
    aboutTitle: "About Home Physiotherapy",
    aboutDescription:
      "Home physiotherapy brings expert rehabilitation care directly to your doorstep, providing the same quality treatment you would receive in a clinic but in the comfort and convenience of your own home. This service is ideal for patients with mobility limitations, those recovering from surgery who find traveling difficult, elderly individuals who prefer staying home, bedridden patients requiring specialized care, and busy professionals who cannot easily visit a clinic. Home physiotherapy eliminates the stress and difficulty of traveling while ensuring you receive personalized, one-on-one attention from experienced therapists.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our home physiotherapy service provides comprehensive rehabilitation care in your home environment. Our experienced therapists bring portable treatment equipment and provide the full range of physiotherapy services including assessment and treatment planning, manual therapy and joint mobilization, therapeutic exercises and strengthening programs, pain management using portable modalities like TENS units, post-surgical rehabilitation, neurological rehabilitation, geriatric care, and education for patients and caregivers. We conduct thorough home safety assessments to identify fall risks and recommend modifications. Treatment is customized to your home environment, utilizing available space and furniture for exercises and functional training. Our therapists can train family members or caregivers in assisting with exercises, transfers, and daily care. We maintain detailed progress notes and coordinate care with your physicians and other healthcare providers. Home physiotherapy is particularly beneficial for post-stroke rehabilitation, Parkinson's disease management, post-surgical recovery, chronic pain management, and mobility training after hip or knee replacement. Sessions are scheduled at your convenience, and we provide flexible appointment times including evenings and weekends.",
    benefits: [
      "Convenience of home treatment",
      "No travel required",
      "Personalized one-on-one attention",
      "Comfortable familiar environment",
      "Family involvement in care",
      "Continuity of care",
      "Flexible scheduling",
      "Home safety assessment",
      "Caregiver training",
      "Better treatment compliance",
    ],
    features: [
      "Experienced home care therapists",
      "Portable treatment equipment",
      "Flexible appointment times",
      "Comprehensive assessment at home",
    ],
    image:
      Home,
    icon: "🏠",
  },

  "affordable-home-physiotherapy": {
    title: "Affordable Home Physiotherapy",
    description: "Quality home physiotherapy services at affordable rates.",
    aboutTitle: "About Affordable Home Physiotherapy",
    aboutDescription:
      "We believe that everyone deserves access to quality physiotherapy care, regardless of their financial situation. Our affordable home physiotherapy program provides the same expert treatment and professional service at competitive, budget-friendly rates. We've structured our pricing to make home-based rehabilitation accessible to more patients while maintaining the highest standards of care. This service is designed for those who need the convenience of home physiotherapy but are concerned about the cost, seniors on fixed incomes, patients requiring long-term rehabilitation, and families seeking quality care without financial burden.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our affordable home physiotherapy service makes professional rehabilitation accessible without compromising on quality. We offer the same experienced therapists, comprehensive assessment and treatment, evidence-based therapeutic techniques, and portable treatment equipment as our standard home service, but at reduced rates designed to fit various budgets. We provide flexible payment options including package deals for multiple sessions at discounted rates, weekly or monthly payment plans, senior citizen discounts, and special rates for long-term care patients. Our affordable home physiotherapy covers all conditions including post-surgical rehabilitation, chronic pain management, stroke recovery, arthritis management, balance and fall prevention, and general mobility improvement. We understand that consistent, regular physiotherapy is essential for recovery, so we've structured our pricing to encourage treatment compliance rather than financial barriers. Each session includes comprehensive treatment, home exercise programs, progress monitoring, and coordination with other healthcare providers. We also provide guidance on utilizing insurance benefits and government schemes that may help cover physiotherapy costs. Our goal is to ensure that financial constraints don't prevent anyone from receiving the rehabilitation care they need to recover and maintain independence.",
    benefits: [
      "Cost-effective treatment option",
      "High-quality care at lower cost",
      "No compromise on treatment quality",
      "Flexible payment options",
      "Package discounts available",
      "Budget-friendly solutions",
      "Accessible to more patients",
      "Regular affordable care",
      "Senior citizen discounts",
      "Long-term care packages",
    ],
    features: [
      "Competitive pricing",
      "Flexible payment plans",
      "Package options available",
      "No compromise on quality",
    ],
    image:
      affordablehome,
    icon: "💰",
  },

  physiotherapist: {
    title: "Best Physiotherapist",
    description:
      "Highly qualified physiotherapists providing personalized care and treatment.",
    aboutTitle: "About Our Physiotherapists",
    aboutDescription:
      "The quality of your physiotherapy treatment depends largely on the expertise, experience, and dedication of your physiotherapist. Our team consists of highly qualified, certified physiotherapists who bring years of specialized training and clinical experience to provide exceptional care. Each physiotherapist maintains active licenses, stays updated with the latest research and treatment techniques through continuing education, and specializes in various areas of physiotherapy including orthopedics, sports rehabilitation, neurological conditions, geriatric care, and pain management. We pride ourselves on our patient-centered approach, evidence-based practice, and commitment to achieving the best possible outcomes for every patient.",
    aboutExtended:
      "At Sharma Orthopedic and Rehab Centre, our physiotherapists are carefully selected based on their qualifications, clinical skills, and patient care philosophy. All our therapists hold Bachelor's or Master's degrees in Physiotherapy from recognized institutions and are registered with professional physiotherapy councils. Many have pursued additional certifications in specialized areas such as manual therapy, sports physiotherapy, McKenzie Method for spinal problems, dry needling and trigger point therapy, neurological rehabilitation, orthopedic rehabilitation, and geriatric physiotherapy. Our team approach ensures you receive comprehensive care from therapists with the right expertise for your specific condition. Each physiotherapist conducts thorough initial assessments including detailed history taking, physical examination, movement analysis, and functional testing to understand your condition completely. Treatment plans are individualized based on your diagnosis, goals, lifestyle, and preferences. Our therapists use a combination of hands-on manual therapy, therapeutic exercises, advanced modalities, and patient education to achieve optimal results. They maintain detailed progress notes, regularly reassess your condition, and modify treatment based on your response and progression. Beyond technical skills, our physiotherapists demonstrate genuine care, excellent communication, patient education abilities, and commitment to your recovery. We foster collaborative relationships with patients, involving you in decision-making and empowering you with knowledge and skills for long-term health management.",
    benefits: [
      "Highly qualified and certified professionals",
      "Specialized expertise in various conditions",
      "Personalized one-on-one attention",
      "Comprehensive assessment and diagnosis",
      "Customized treatment protocols",
      "Compassionate and caring approach",
      "Evidence-based treatment methods",
      "Excellent communication skills",
      "Continuous professional development",
      "Commitment to patient success",
    ],
    features: [
      "Advanced certifications and training",
      "Years of clinical experience",
      "Specialization in multiple areas",
      "Commitment to patient success",
    ],
    image:
      Physiotherapy,
    icon: "👨‍⚕️",
  },
};

const advancedPainServiceDetails = { ...sharmaServiceDetails };

const sharmaTheme = {
  primary: "#16a34a",
  secondary: "#f97316",
  accent: "#22c55e",
  dark: "#1e293b",
  navBg: "bg-gradient-to-r from-[#16a34a] to-[#f97316]",
  buttonBg: "bg-[#16a34a] hover:bg-[#f97316]",
};

const advancedPainTheme = {
  primary: "#8ab72e",
  secondary: "#7aa625",
  accent: "#a8d444",
  dark: "#2d3748",
  navBg: "bg-gradient-to-r from-[#8ab72e] to-[#7aa625]",
  buttonBg: "bg-[#8ab72e] hover:bg-[#7aa625]",
};

export default function PhysiotherapyServiceDetail() {
  const { clinicSlug, serviceSlug } = useParams();
  const [searchParams] = useSearchParams();
  const locationSlug = searchParams.get("location");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const isSharma = clinicSlug === "sharma-orthopedic-rehab-centre";
  const serviceDetails = isSharma
    ? sharmaServiceDetails
    : advancedPainServiceDetails;
  const theme = isSharma ? sharmaTheme : advancedPainTheme;
  const clinicLogo = isSharma ? SharmaLogo : Logo;
  const clinicName = isSharma
    ? "Sharma Orthopedic and Rehab Centre"
    : "Advanced Pain Physiotherapy Centre";
  const clinicPhone = "9220385419";
  const clinicEmail = isSharma
    ? "sharma.ortho@example.com"
    : "advancedpainphysiotherapy@gmail.com";

  const service = serviceDetails[serviceSlug];

  // Get location name if location parameter exists
  const locationName = locationSlug ? locationNames[locationSlug] : null;

  // Create location-aware title
  const serviceTitle = locationName
    ? `${service?.title} in ${locationName}`
    : service?.title;

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <Link
            to={`/clinic/${clinicSlug}`}
            className="text-blue-600 hover:underline text-lg"
          >
            Go back to clinic page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className={`${theme.navBg} text-white shadow-lg sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
            <Link
              to={
                locationSlug
                  ? `/location/${locationSlug}`
                  : `/clinic/${clinicSlug}`
              }
              className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0"
            >
              <img
                src={clinicLogo}
                alt={`${clinicName} Logo`}
                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white rounded-md sm:rounded-lg p-1 sm:p-2 shadow-md flex-shrink-0"
              />
              <span className="hidden sm:block text-sm md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg truncate">
                {clinicName}
              </span>
            </Link>
            <Link to="/contact" className="flex-shrink-0">
              <button
                className="bg-white px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{ color: theme.primary }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* About Section with Image - WITH LOCATION IN TITLE */}
        <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 sm:h-80 lg:h-full rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={serviceTitle}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right - Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {serviceTitle}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {service.aboutDescription}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.aboutExtended}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Physiotherapy Section - GRID LAYOUT */}
        <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Benefits of Physiotherapy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-snug">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services */}
        <div data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center">
            Our Other Services {locationName && `in ${locationName}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {Object.entries(serviceDetails)
              .filter(([slug]) => slug !== serviceSlug)
              .slice(0, 6)
              .map(([slug, otherService], idx) => {
                // Create URL with location parameter if it exists
                const serviceUrl = locationSlug
                  ? `/clinic/${clinicSlug}/service/${slug}?location=${locationSlug}`
                  : `/clinic/${clinicSlug}/service/${slug}`;

                // Create title with location if it exists
                // const otherServiceTitle = locationName
                //   ? `${otherService.title} in ${locationName}`
                //   : otherService.title;
                const otherServiceTitle = otherService.title.replace(
                  /^Best\s+/i,
                  "",
                );
                return (
                  <Link
                    key={slug}
                    to={serviceUrl}
                    data-aos="fade-up"
                    data-aos-delay={idx * 80}
                    className="block"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden h-full">
                      <div className="h-36 sm:h-40 md:h-48 overflow-hidden">
                        <img
                          src={otherService.image}
                          alt={otherServiceTitle}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3 sm:p-4 md:p-6">
                        <div className="text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 md:mb-3">
                          {otherService.icon}
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-1.5 md:mb-2 leading-snug">
                          {otherServiceTitle}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-snug line-clamp-2">
                          {otherService.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-white mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                {clinicName}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Your Partner in Complete Recovery
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      locationSlug
                        ? `/location/${locationSlug}`
                        : `/clinic/${clinicSlug}`
                    }
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 md:mb-4">
                Contact
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
                <li>📞 {clinicPhone}</li>
                <li className="break-all">📧 {clinicEmail}</li>
                <li>🕒 8am - 10pm</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm md:text-base text-gray-400">
            <p>&copy; 2025 {clinicName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
