import React, { useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../../../assets/Logo.jpeg";

//Ashish
import backpain1 from "../../../assets/ashish/1.png";
import chiropractorImage01 from "../../../assets/ashish/9.png";
import slipdisc2 from "../../../assets/ashish/8.png";
import sciatic2 from "../../../assets/ashish/7.png";
import orthopedic2 from "../../../assets/ashish/6.png";
import arthritis2 from "../../../assets/ashish/5.png";
import neck2 from "../../../assets/ashish/4.png";
import ShoulderPain2 from "../../../assets/ashish/3.png";
import KneePain2 from "../../../assets/ashish/2.png";
import cervical2 from "../../../assets/ashish/16.jpeg";
import Cupping2 from "../../../assets/Therapy/11.png";
import sportsMassageImage2 from "../../../assets/Specialities/12.png";
import pain2 from "../../../assets/ashish/13.png";
import parkinsons2 from "../../../assets/services/18.png";
import op2 from "../../../assets/ashish/14.png";
import Home2 from "../../../assets/Specialities/1.png";
import affordablehome2 from "../../../assets/ashish/15.png";
import lymphatic2 from "../../../assets/ashish/12.png";
import Physiotherapy2 from "../../../assets/ashish/10.png";

import Physiotherapy001 from "../../../assets/ashish/11.png";

// Advanced Pain Theme
const theme = {
  primary: "#8ab72e",
  secondary: "#7aa625",
  accent: "#a8d444",
  dark: "#2d3748",
  navBg: "bg-gradient-to-r from-[#8ab72e] to-[#7aa625]",
  buttonBg: "bg-[#8ab72e] hover:bg-[#7aa625]",
};

const serviceDetails = {
  chiropractor: {
    title: "Best Chiropractor in Delhi",
    description:
      "Expert spinal adjustment and manipulation for pain relief and improved mobility with advanced chiropractic care.",
    aboutDescription:
      "Chiropractic care is a healthcare profession that focuses on diagnosing and treating neuromuscular disorders through manual adjustment and manipulation of the spine. Our chiropractors use evidence-based, non-invasive techniques to restore proper alignment, reduce pain, and enhance your overall function and well-being.",
    aboutExtended:
      "Under the expert guidance of Dr. Ashish Sharma, our specialized team assesses your unique condition and creates personalized treatment plans tailored to your needs. Our comprehensive approach includes advanced stretching exercises, core strengthening programs, and joint mobilization techniques. We utilize FDA-approved electrotherapy modalities such as LASER Therapy, Shockwave Therapy, Ultrasound Therapy, Kinesiology Taping, Dry Needling, IFT/TENS, and Infrared Therapy to reduce inflammation and provide effective pain relief. Our treatment emphasizes posture correction to manage symptoms and prevent recurrence. With Dr. Ashish Sharma's commitment to accurate diagnosis, personalized care, and evidence-based treatment, we ensure long-term relief and faster recovery. Our goal extends beyond pain relief – we aim to restore your strength, mobility, and confidence in daily life.",
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
    image: chiropractorImage01,
    icon: "🦴",
  },

  "physiotherapy-center": {
    title: "Best Physiotherapy Center in Delhi",
    description:
      "Complete physiotherapy services with modern equipment and expert therapists for all rehabilitation needs.",
    aboutDescription:
      "Our state-of-the-art physiotherapy center offers comprehensive rehabilitation and therapeutic services for musculoskeletal, neurological, and sports-related conditions. Equipped with the latest technology and staffed by highly trained physiotherapists, we provide evidence-based treatments tailored to each patient's unique needs for optimal recovery.",
    aboutExtended:
      "At our center, we combine traditional physiotherapy expertise with cutting-edge technology under the expert guidance of Dr. Ashish Sharma. Our customized treatment plans incorporate therapeutic exercises, manual therapy, and advanced modalities including LASER Therapy, Shockwave Therapy, Ultrasound, Dry Needling, and TENS to accelerate healing. We specialize in treating sports injuries, post-surgical rehabilitation, chronic pain conditions, and neurological disorders. Every patient receives a comprehensive assessment by Dr. Ashish Sharma's team, followed by a personalized treatment program designed to achieve optimal recovery. Our multidisciplinary approach ensures you receive the highest standard of care throughout your rehabilitation journey.",
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
    image: Physiotherapy2,
    icon: "🏥",
  },

  "back-pain-treatment": {
    title: "Best Back Pain Treatment in Delhi",
    description:
      "Specialized treatment for all types of back pain using proven therapeutic methods and advanced technology.",
    aboutDescription:
      "Back pain is one of the most common health complaints affecting people of all ages. It can range from mild discomfort to severe, debilitating pain that impacts daily activities. Back pain typically occurs due to poor posture, prolonged sitting or standing, improper lifting techniques, muscle weakness, injury, or spinal disorders. Our expert team provides comprehensive solutions for lasting relief.",
    aboutExtended:
      "Under the expert care of Dr. Ashish Sharma, we specialize in comprehensive back pain treatment using evidence-based approaches. Our expert physiotherapists conduct thorough assessments to identify the root cause of your pain, whether it's muscle strain, disc problems, nerve compression, or postural issues. Dr. Ashish Sharma's treatment protocol includes targeted manual therapy, spinal mobilization, core strengthening exercises, and postural correction programs. We utilize advanced FDA-approved modalities including LASER Therapy for deep tissue healing, Shockwave Therapy for chronic pain, Ultrasound Therapy to reduce inflammation, Dry Needling for trigger point release, and TENS for immediate pain relief. Our holistic approach not only addresses current pain but also focuses on preventing future episodes through patient education, ergonomic advice, and home exercise programs guided by Dr. Ashish Sharma. We aim to restore your mobility, strengthen your spine's supporting muscles, and help you return to pain-free living.",
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
    image: backpain1,
    icon: "🔙",
  },

  "lymphatic-massage-therapist": {
    title: "Best Lymphatic Massage Therapist in Delhi",
    description:
      "Expert lymphatic massage therapists specialized in manual lymphatic drainage and therapeutic techniques.",
    aboutDescription:
      "A lymphatic massage therapist is a highly trained specialist who focuses on stimulating the lymphatic system through gentle, rhythmic massage techniques. Our certified therapists have extensive training in manual lymphatic drainage (MLD), understanding the intricate network of lymph vessels and nodes throughout the body. They use specialized, light-touch techniques that are distinctly different from traditional massage, designed specifically to encourage lymph flow and support the body's natural healing processes.",
    aboutExtended:
      "Under the expert guidance of Dr. Ashish Sharma, our lymphatic massage therapists are certified in advanced manual lymphatic drainage techniques including the Vodder method, Leduc method, and Casley-Smith method. Our therapists undergo rigorous training to understand lymphatic anatomy, physiology, and pathology. They specialize in treating a wide range of conditions including post-surgical lymphedema, primary and secondary lymphedema, chronic venous insufficiency, lipedema, fibromyalgia, chronic fatigue syndrome, and sports-related swelling. Dr. Ashish Sharma ensures that each therapist maintains the highest standards of care and stays updated with the latest research in lymphatic therapy. Our therapists work closely with physicians, surgeons, and oncologists to provide comprehensive care for patients with lymphatic disorders. They create personalized treatment plans that may include compression bandaging, skin care education, therapeutic exercises, and lifestyle recommendations. With Dr. Ashish Sharma's supervision, our lymphatic massage therapists provide compassionate, expert care that addresses both the physical and emotional aspects of lymphatic conditions.",
    benefits: [
      "Specialized expertise in lymphatic system",
      "Gentle, precise massage techniques",
      "Certified in manual lymphatic drainage",
      "Experience with complex lymphatic conditions",
      "Post-surgical edema management",
      "Lymphedema treatment and prevention",
      "Compassionate, patient-centered care",
      "Comprehensive assessment skills",
      "Collaborative approach with medical team",
      "Education on self-care techniques",
      "Customized treatment protocols",
      "Long-term lymphatic health support",
    ],
    image: lymphatic2,
    icon: "👐",
  },

  "sciatica-pain-treatment": {
    title: "Best Sciatica Pain Treatment in Delhi",
    description:
      "Targeted treatment for sciatic nerve pain and related symptoms with proven results.",
    aboutDescription:
      "Sciatica is a condition characterized by pain that radiates along the path of the sciatic nerve, which extends from the lower back through the hips and buttocks and down each leg. The pain typically affects only one side of the body and can range from mild discomfort to sharp, burning sensations that significantly impact your daily life and mobility.",
    aboutExtended:
      "We offer specialized sciatica treatment programs that address both symptoms and underlying causes under the expert care of Dr. Ashish Sharma. Our expert physiotherapists use a combination of manual therapy techniques including neural mobilization to improve nerve mobility, spinal decompression to relieve pressure on the nerve root, and the McKenzie Method for directional preference exercises. Dr. Ashish Sharma's treatment protocol incorporates targeted stretching to release tight muscles, progressive strengthening exercises to stabilize the spine, and core training to prevent recurrence. We utilize advanced therapeutic modalities including LASER Therapy for deep tissue healing, Shockwave Therapy for chronic cases, Ultrasound to reduce inflammation around the nerve, Dry Needling for trigger point release, and TENS for immediate pain relief. With Dr. Ashish Sharma's expertise, our comprehensive approach provides lasting relief and improved function.",
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
    image: sciatic2,
    icon: "⚡",
  },

  "slip-disc-treatment": {
    title: "Best Slip Disc Treatment in Delhi",
    description:
      "Conservative, non-surgical treatment for herniated and bulging discs with proven success.",
    aboutDescription:
      "A slipped disc, also known as a herniated or prolapsed disc, occurs when the soft gel-like center of a spinal disc pushes through a tear in the tough outer layer. This can compress nearby spinal nerves, causing pain, numbness, tingling, and weakness in the arms or legs depending on the location of the affected disc. Our expert team provides effective non-surgical solutions.",
    aboutExtended:
      "We specialize in non-surgical slip disc treatment with proven success rates under the guidance of Dr. Ashish Sharma. Our comprehensive approach begins with detailed assessment using clinical tests and imaging analysis to determine the exact location and severity of disc herniation. Dr. Ashish Sharma's treatment combines the McKenzie Method for directional preference, spinal decompression therapy to reduce disc pressure, manual therapy for pain relief and mobility, and progressive core stabilization exercises to support the spine. We use advanced therapeutic modalities including LASER Therapy for accelerated healing, Shockwave Therapy for chronic cases, Ultrasound to reduce inflammation, and TENS for pain control. With Dr. Ashish Sharma's expertise and personalized care, most patients experience significant improvement without surgery.",
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
    image: slipdisc2,
    icon: "💿",
  },

  "arthritis-treatment": {
    title: "Best Arthritis Treatment in Delhi",
    description:
      "Comprehensive care for all types of arthritis and joint inflammation with personalized treatment plans.",
    aboutDescription:
      "Arthritis is a common condition causing joint pain, stiffness, swelling, and reduced mobility. It affects millions of people worldwide and can occur in any joint of the body. The two most common types are osteoarthritis (wear-and-tear arthritis) and rheumatoid arthritis (an autoimmune condition). Our specialized treatment helps manage symptoms and improve quality of life.",
    aboutExtended:
      "Under Dr. Ashish Sharma's expert care, we provide specialized arthritis management programs tailored to your specific type and severity of arthritis. Our comprehensive treatment approach includes gentle joint mobilization to improve range of motion, therapeutic exercises to strengthen muscles around affected joints, balance and stability training to prevent falls, and manual therapy for pain relief. Dr. Ashish Sharma's protocol utilizes advanced modalities including LASER Therapy to reduce inflammation, Ultrasound Therapy for deep tissue healing, TENS for pain management, and Shockwave Therapy for chronic cases. We also provide education on joint protection techniques, activity modification, and self-management strategies to help you maintain independence and quality of life.",
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
    image: arthritis2,
    icon: "🦴",
  },

  "knee-pain-treatment": {
    title: "Best Knee Pain Treatment in Delhi",
    description:
      "Expert treatment for all knee conditions and injuries with advanced therapeutic techniques.",
    aboutDescription:
      "Knee pain is a common complaint affecting people of all ages and activity levels. It can result from various causes including acute injuries (ligament tears, meniscus damage), overuse conditions (runner's knee, tendinitis), arthritis, biomechanical issues, or age-related degeneration. Our comprehensive approach addresses all types of knee pain for lasting relief.",
    aboutExtended:
      "We offer comprehensive knee pain treatment programs for all types of knee conditions under the supervision of Dr. Ashish Sharma. Our expert assessment identifies the specific cause of your knee pain through clinical tests, movement analysis, and biomechanical evaluation. Dr. Ashish Sharma's treatment includes targeted manual therapy for pain relief and joint mobility, progressive strengthening exercises for quadriceps, hamstrings, and hip muscles, patellar mobilization techniques, balance and proprioception training, and gait retraining when needed. We utilize advanced modalities including LASER Therapy for tissue healing, Shockwave Therapy for chronic conditions, Ultrasound for inflammation reduction, and Kinesiology Taping for support and pain relief. Whether you're recovering from injury, managing arthritis, or preparing for or recovering from knee surgery, Dr. Ashish Sharma's personalized approach ensures optimal outcomes.",
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
    image: KneePain2,
    icon: "🦵",
  },

  "cervical-pain-treatment": {
    title: "Best Cervical Pain Treatment in Delhi",
    description:
      "Specialized treatment for neck and cervical spine conditions with lasting results.",
    aboutDescription:
      "Cervical pain, commonly known as neck pain, affects the cervical spine (the upper seven vertebrae of the spine). It can range from mild discomfort to severe pain that radiates into the shoulders, arms, and hands. Common causes include poor posture, muscle strain, cervical disc herniation, whiplash injuries, arthritis, or nerve compression requiring specialized treatment.",
    aboutExtended:
      "We specialize in treating all types of cervical spine conditions under the expert care of Dr. Ashish Sharma. Our comprehensive cervical pain treatment begins with thorough assessment to identify the exact cause—whether muscular, disc-related, postural, or neurological. Dr. Ashish Sharma's treatment includes advanced manual therapy techniques for immediate pain relief, cervical mobilization and manipulation when appropriate, deep tissue massage for muscle tension, and nerve mobilization for radiating symptoms. We incorporate specific strengthening exercises for deep neck flexors and cervical stabilizers, postural correction programs for long-term relief, and ergonomic advice for work and daily activities. Advanced modalities used include LASER Therapy for tissue healing, Shockwave Therapy for chronic pain, Dry Needling for trigger points, and TENS for pain management. With Dr. Ashish Sharma's expertise, our goal is to provide lasting relief and prevent recurrence.",
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
    image: cervical2,
    icon: "🔝",
  },

  "shoulder-pain-treatment": {
    title: "Best Shoulder Pain Treatment in Delhi",
    description:
      "Comprehensive care for shoulder injuries and conditions with expert rehabilitation.",
    aboutDescription:
      "Shoulder pain is a common problem that can significantly limit your ability to work, exercise, and perform daily activities. The shoulder is a complex ball-and-socket joint with extensive range of motion, making it vulnerable to various injuries and conditions including rotator cuff tears, frozen shoulder, impingement syndrome, and arthritis.",
    aboutExtended:
      "We provide specialized shoulder rehabilitation programs for all shoulder conditions under the guidance of Dr. Ashish Sharma. Our expert physiotherapists conduct comprehensive shoulder assessments including range of motion testing, strength evaluation, special clinical tests, and movement analysis to identify the specific problem. Dr. Ashish Sharma's treatment incorporates manual therapy techniques for pain relief and joint mobility, rotator cuff strengthening protocols using progressive resistance, scapular stabilization exercises, stretching programs for flexibility, and functional training for daily activities and sports. Advanced modalities include LASER Therapy for tissue repair, Shockwave Therapy for chronic conditions like calcific tendinitis, Ultrasound for inflammation, and Dry Needling for trigger points. Whether you're dealing with a recent injury, chronic condition, or post-surgical recovery, Dr. Ashish Sharma's personalized approach ensures optimal shoulder function and pain-free movement.",
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
    image: ShoulderPain2,
    icon: "💪",
  },

  "neck-spasm-treatment": {
    title: "Best Neck Spasm Treatment in Delhi",
    description:
      "Rapid relief from painful neck muscle spasms and tension with immediate results.",
    aboutDescription:
      "Neck spasms are sudden, involuntary contractions of neck muscles that can cause severe pain and restricted movement. These painful episodes often result from stress, poor posture, prolonged computer use, sudden movements, sleeping in awkward positions, or underlying cervical spine problems. Quick and effective treatment is essential for relief.",
    aboutExtended:
      "We provide rapid and effective treatment for neck spasms using specialized manual therapy techniques under the care of Dr. Ashish Sharma. Our approach begins with immediate pain relief through gentle soft tissue mobilization, trigger point therapy to release muscle knots, muscle energy techniques to reduce spasm, and heat therapy for muscle relaxation. Dr. Ashish Sharma's protocol uses advanced modalities including TENS for immediate pain control, Ultrasound Therapy to reduce muscle tension, Dry Needling for deep trigger point release, and Infrared Therapy for muscle relaxation. We also teach you self-management techniques, stretching exercises, posture correction strategies, and stress management methods to prevent future episodes. With Dr. Ashish Sharma's expertise, most patients experience significant relief within the first few sessions.",
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
    image: neck2,
    icon: "😣",
  },

  "cupping-therapy": {
    title: "Best Cupping Therapy in Delhi",
    description:
      "Traditional cupping therapy for pain relief, healing, and improved circulation.",
    aboutDescription:
      "Cupping therapy is an ancient healing technique that uses suction cups placed on the skin to increase blood flow, release muscle tension, and promote healing. This traditional therapy has been used for thousands of years and is now gaining recognition in modern sports medicine and rehabilitation for its effective pain relief and healing properties.",
    aboutExtended:
      "Our certified therapists use both dry cupping and wet cupping (hijama) methods based on your specific needs under the supervision of Dr. Ashish Sharma. Dry cupping involves placing cups on the skin to create suction, while wet cupping involves making small incisions before applying cups to remove stagnant blood. Dr. Ashish Sharma ensures we use modern, sterile equipment and follow strict hygiene protocols for safe, effective treatment. Cupping therapy is particularly beneficial for chronic pain conditions, muscle tension, sports injuries, respiratory conditions, and stress relief. Our therapists are trained by Dr. Ashish Sharma in traditional cupping methods combined with modern physiotherapy principles to provide comprehensive care. Sessions are customized to your condition and comfort level.",
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
    image: Cupping2,
    icon: "🫙",
  },

  "sports-massage-therapy": {
    title: "Best Sports Massage Therapy in Delhi",
    description:
      "Specialized massage for athletes and active individuals to enhance performance and recovery.",
    aboutDescription:
      "Sports massage therapy is a specialized form of massage designed specifically for athletes and physically active individuals. It combines various massage techniques including deep tissue work, compression, friction, and stretching to address the unique needs of those engaged in regular physical activity or sports for optimal performance and recovery.",
    aboutExtended:
      "Our certified sports massage therapists have extensive experience working with athletes across various sports and fitness levels under the guidance of Dr. Ashish Sharma. We provide tailored massage protocols for different stages of training and competition. Pre-event sports massage uses stimulating techniques to prepare muscles for activity, increase circulation, and improve flexibility. Post-event massage focuses on recovery, reducing muscle soreness, removing metabolic waste products, and preventing delayed onset muscle soreness (DOMS). Dr. Ashish Sharma's maintenance massage programs help prevent injuries, identify potential problem areas, and keep athletes in peak condition. We also provide rehabilitation massage for injury recovery, working closely with Dr. Ashish Sharma's physiotherapy protocols. Our therapists understand muscle anatomy, biomechanics, and the specific demands of different sports, ensuring targeted, effective treatment.",
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
    image: sportsMassageImage2,
    icon: "⚽",
  },

  "pain-relief-treatment": {
    title: "Best Pain Relief Treatment in Delhi",
    description:
      "Comprehensive pain management for acute and chronic conditions with drug-free solutions.",
    aboutDescription:
      "Pain relief treatment encompasses a comprehensive approach to managing both acute and chronic pain conditions without relying solely on medication. Whether you're experiencing sudden injury-related pain or dealing with long-standing chronic pain that has affected your quality of life for months or years, effective pain management is crucial for recovery and overall well-being.",
    aboutExtended:
      "Under the care of Dr. Ashish Sharma, we provide multi-modal pain management programs that combine the most effective evidence-based techniques. Our comprehensive approach includes manual therapy for immediate pain relief, therapeutic exercises to address underlying dysfunction, postural correction to reduce pain triggers, and patient education for self-management. Dr. Ashish Sharma utilizes advanced pain-relieving modalities including LASER Therapy for deep tissue healing and pain reduction, Shockwave Therapy for chronic pain conditions, TENS for immediate pain control, Ultrasound Therapy to reduce inflammation, Dry Needling for myofascial pain, and heat/cold therapy for symptom management. We address various pain conditions including musculoskeletal pain, neuropathic pain, chronic pain syndromes, post-surgical pain, and injury-related pain. Dr. Ashish Sharma's goal is to reduce your pain, improve function, and help you return to activities you enjoy without dependence on pain medications.",
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
    image: pain2,
    icon: "🩹",
  },

  "orthopedic-rehab": {
    title: "Best Orthopedic Rehabilitation in Delhi",
    description:
      "Specialized rehabilitation for orthopedic conditions and surgeries with comprehensive recovery programs.",
    aboutDescription:
      "Orthopedic rehabilitation is a specialized branch of physical therapy focused on the treatment of musculoskeletal injuries and conditions affecting bones, joints, muscles, ligaments, and tendons. This includes rehabilitation after orthopedic surgeries, management of fractures and dislocations, treatment of sports injuries, and recovery from musculoskeletal trauma for optimal functional outcomes.",
    aboutExtended:
      "We provide comprehensive orthopedic rehabilitation programs guided by evidence-based protocols and the latest research in musculoskeletal recovery under the supervision of Dr. Ashish Sharma. Our programs begin with thorough assessment of your condition, surgical reports (if applicable), current functional limitations, and rehabilitation goals. Dr. Ashish Sharma structures treatment in progressive phases focusing on pain control, range of motion restoration, strengthening, and functional training. We specialize in post-surgical rehabilitation for joint replacements (knee, hip, shoulder), ACL reconstruction, rotator cuff repairs, spinal surgeries, and fracture management. Treatment includes manual therapy, progressive therapeutic exercises, proprioception and balance training, and functional movement retraining. Advanced modalities used include LASER Therapy, Shockwave Therapy, Ultrasound, and TENS. With Dr. Ashish Sharma's expertise and protocol-driven approach, we ensure optimal surgical outcomes and faster return to activities.",
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
    image: orthopedic2,
    icon: "🦴",
  },

  "parkinsons-treatment": {
    title: "Best Parkinson's Treatment in Delhi",
    description:
      "Specialized physiotherapy for Parkinson's disease management with expert neurological care.",
    aboutDescription:
      "Parkinson's disease is a progressive neurological disorder affecting movement, balance, and coordination. Common symptoms include tremors (shaking), bradykinesia (slowness of movement), rigidity (muscle stiffness), postural instability, and gait problems. Specialized physiotherapy plays a crucial role in managing symptoms and maintaining quality of life.",
    aboutExtended:
      "We provide specialized neurological physiotherapy programs designed specifically for Parkinson's disease management under the expert care of Dr. Ashish Sharma. Our therapists are trained in evidence-based Parkinson's treatment approaches including LSVT BIG, which focuses on high-amplitude movements to counteract the small, shuffling movements characteristic of Parkinson's. Dr. Ashish Sharma's treatment includes targeted exercises for improving movement amplitude and speed, balance training to prevent falls, gait training to address shuffling gait and freezing episodes, flexibility exercises to reduce rigidity, and functional task training for activities of daily living. We also incorporate dual-task training, boxing-based therapy, dance therapy, and other specialized techniques proven effective for Parkinson's. Our programs are tailored to your stage of disease and individual needs, with regular reassessment to adjust treatment as your condition changes. With Dr. Ashish Sharma's expertise in neurological rehabilitation, we help you maintain independence and quality of life.",
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
    image: parkinsons2,
    icon: "🧠",
  },

  "post-op-physiotherapy-treatment": {
    title: "Best Post-Op Physiotherapy Treatment in Delhi",
    description:
      "Comprehensive post-operative rehabilitation for optimal recovery and faster healing.",
    aboutDescription:
      "Post-operative physiotherapy is essential rehabilitation that begins after surgical procedures to ensure optimal recovery, prevent complications, and restore function. Whether you've undergone orthopedic surgery, abdominal surgery, cardiac surgery, or any other surgical procedure, early and appropriate physiotherapy can significantly impact your recovery timeline and final outcomes.",
    aboutExtended:
      "Our post-operative rehabilitation programs are designed in collaboration with surgeons and follow established surgical protocols for each procedure type under the guidance of Dr. Ashish Sharma. Treatment typically begins within the first few days after surgery and progresses through carefully planned phases. Dr. Ashish Sharma's protocol focuses on pain management using gentle techniques and modalities, preventing complications like blood clots, pneumonia, and muscle atrophy, restoring range of motion through progressive mobilization, strengthening weakened muscles systematically, and functional training to return to daily activities. We provide specialized post-op programs for joint replacement surgeries, spinal surgeries, cardiac and thoracic surgeries, abdominal surgeries, sports injury repairs, and other procedures. Each program is customized based on surgical protocols, your healing progress, and individual goals. With Dr. Ashish Sharma's expertise and close monitoring, we ensure safe, effective recovery.",
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
    image: op2,
    icon: "🏥",
  },

  "home-physiotherapy": {
    title: "Best Home Physiotherapy in Delhi",
    description:
      "Professional physiotherapy services in the comfort of your home with expert care.",
    aboutDescription:
      "Home physiotherapy brings expert rehabilitation care directly to your doorstep, providing the same quality treatment you would receive in a clinic but in the comfort and convenience of your own home. This service is ideal for patients with mobility limitations, those recovering from surgery, elderly individuals, bedridden patients, and busy professionals who need flexible scheduling.",
    aboutExtended:
      "Our home physiotherapy service provides comprehensive rehabilitation care in your home environment under the supervision of Dr. Ashish Sharma. Our experienced therapists bring portable treatment equipment and provide the full range of physiotherapy services including assessment and treatment planning, manual therapy, therapeutic exercises, pain management, post-surgical rehabilitation, neurological rehabilitation, and geriatric care. Dr. Ashish Sharma ensures our home physiotherapy maintains the same high standards as clinic-based treatment. Sessions are scheduled at your convenience, and therapists conduct thorough assessments in your home environment, which allows for realistic functional training and home safety modifications. We provide caregiver training when needed and maintain regular communication with Dr. Ashish Sharma for treatment updates and modifications. Our portable equipment includes TENS units, ultrasound devices, and various therapeutic tools to deliver comprehensive care.",
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
    image: Home2,
    icon: "🏠",
  },

  "affordable-home-physiotherapy": {
    title: "Affordable Home Physiotherapy in Delhi",
    description:
      "Quality home physiotherapy services at affordable rates without compromising on care.",
    aboutDescription:
      "We believe that everyone deserves access to quality physiotherapy care, regardless of their financial situation. Our affordable home physiotherapy program provides the same expert treatment and professional service at competitive, budget-friendly rates, making professional rehabilitation accessible to all who need it.",
    aboutExtended:
      "Our affordable home physiotherapy service makes professional rehabilitation accessible without compromising on quality under the care of Dr. Ashish Sharma. We offer the same experienced therapists, comprehensive assessment and treatment, evidence-based therapeutic techniques, and portable treatment equipment as our standard home service, but at reduced rates designed to fit various budgets. Dr. Ashish Sharma ensures that affordable pricing never means lower quality care. We provide flexible payment options including package deals for multiple sessions at discounted rates, monthly treatment plans, senior citizen discounts, and special rates for long-term care patients. Our goal is to make Dr. Ashish Sharma's expert physiotherapy accessible to everyone who needs it, ensuring that financial constraints don't prevent you from receiving the care you deserve.",
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
    image: affordablehome2,
    icon: "💰",
  },

  physiotherapist: {
    title: "Best Physiotherapist in Delhi",
    description:
      "Highly qualified physiotherapists providing personalized care and expert treatment under Dr. Ashish Sharma.",
    aboutDescription:
      "The quality of your physiotherapy treatment depends largely on the expertise, experience, and dedication of your physiotherapist. Our team consists of highly qualified, certified physiotherapists who bring years of specialized training and clinical experience to provide exceptional care tailored to your individual needs and goals.",
    aboutExtended:
      "Our physiotherapists are carefully selected based on their qualifications, clinical skills, and patient care philosophy under the leadership of Dr. Ashish Sharma. All our therapists hold Bachelor's or Master's degrees in Physiotherapy from recognized institutions and are registered with professional physiotherapy councils. Many have pursued additional certifications in specialized areas such as manual therapy, sports physiotherapy, McKenzie Method, dry needling, neurological rehabilitation, and orthopedic rehabilitation. Dr. Ashish Sharma personally mentors and guides the team to ensure consistent, high-quality care. Our therapists participate in regular training and continuing education programs to stay updated with the latest evidence-based treatment techniques. What sets our team apart is our commitment to personalized care—we take time to understand your condition, listen to your concerns, explain treatment options clearly, and work collaboratively with you to achieve your goals. With Dr. Ashish Sharma's expertise guiding every treatment plan, you receive the highest standard of physiotherapy care.",
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
    image: Physiotherapy001,
    icon: "👨‍⚕️",
  },
};

export default function AshishServiceDetail() {
  const { serviceSlug } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const service = serviceDetails[serviceSlug];

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <Link
            to="/clinic/Ashish-physiotherapy-centre"
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
              to="/clinic/Ashish-physiotherapy-centre"
              className="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0"
            >
              <img
                src={Logo}
                alt="Dr. Ashish Sharma Logo"
                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain bg-white rounded-md sm:rounded-lg p-1 sm:p-2 shadow-md flex-shrink-0"
              />
              <span className="hidden sm:block text-sm md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg truncate">
                Dr. Ashish Sharma
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
        {/* About Section with Image */}
        <div className="mb-8 sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 sm:h-80 lg:h-full rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
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
                    {service.title}
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

        {/* Benefits Section */}
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
            Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {Object.entries(serviceDetails)
              .filter(([slug]) => slug !== serviceSlug)
              .slice(0, 6)
              .map(([slug, otherService], idx) => {
                const otherServiceTitle = otherService.title.replace(
                  /^Best\s+/i,
                  "",
                );
                return (
                  <Link
                    key={slug}
                    to={`/clinic/Ashish-physiotherapy-centre/service/${slug}`}
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
      <footer className="bg-[#2d3748] text-white mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                Dr. Ashish Sharma
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Advanced Pain Physiotherapy Centre
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
                    to="/clinic/Ashish-physiotherapy-centre"
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
                <li>📞 9220385419</li>
                <li>📧 advancedpainphysiotherapy@gmail.com</li>
                <li>🕒 8am - 8pm</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm md:text-base text-gray-400">
            <p>
              &copy; 2025 Advanced Pain Physiotherapy Centre. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
