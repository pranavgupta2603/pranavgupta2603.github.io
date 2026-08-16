/* ============================================================
   CONTENT — this is the only file you need to edit.

   TO ADD A NEW PAPER: copy the block between the dashed lines,
   paste it at the TOP of the PUBLICATIONS list, fill it in.
   Everything except "title" is optional.

   ------------------------------------------------------------
   {
     title:   "Your Paper Title Here",
     authors: "Pranav Gupta, Someone Else, Another Person",
     venue:   "CVPR",
     year:    "2026",
     image:   "new_images/yourpaper.png",
     links: [
       { label: "arXiv", url: "https://arxiv.org/abs/0000.00000" },
       { label: "code",  url: "https://github.com/you/repo" }
     ]
   },
   ------------------------------------------------------------

   Notes
   - Put the thumbnail in new_images/ and write the path as shown.
     Leave "image" out entirely and a clean placeholder is drawn
     from the venue name instead. Nothing breaks.
   - The first link is the one the whole card opens. Add as many
     extra links as you like; they appear as small chips.
   - Keep the commas between blocks. The last block has no comma.
   ============================================================ */

const PUBLICATIONS = [

  {
    title:   "Pagoda: An Energy and Time Roofline Study for DNN Workloads on Edge Accelerators",
    authors: "K Prashanthi S, Kunal Kumar Sahoo, Amartya Ranjan Saikia, Pranav Gupta, Atharva Vinay Joshi, Priyanshu Pansari, Yogesh Simmhan",
    venue:   "ICPP 2026 (accepted)",
    year:    "2026",
    image:   "new_images/pagoda.png",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2509.20189" }
    ]
  },

  {
    title:   "Fulcrum: Optimizing Concurrent DNN Training and Inferencing on Edge Accelerators",
    authors: "K Prashanthi S, Saisamarth Taluri, Pranav Gupta, Amartya Ranjan Saikia, Kunal Kumar Sahoo, Atharva Vinay Joshi, Lakshya Karwa, Kedar Dhule, Yogesh Simmhan",
    venue:   "preprint",
    year:    "2026",
    image:   "new_images/fulcrum.png",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2509.20205" }
    ]
  },

  {
    title:   "ViDAS: Vision-based Danger Assessment and Scoring",
    authors: "Pranav Gupta, Advith Krishnan, Naman Nanda, Ananth Eswar, Deeksha Agarwal, Pratham Gohil, Pratyush Goel",
    venue:   "ICVGIP",
    year:    "2024",
    image:   "new_images/teaser_image.png",
    links: [
      { label: "ACM DL", url: "https://dl.acm.org/doi/10.1145/3702250.3702279" },
      { label: "arXiv",  url: "https://arxiv.org/abs/2410.00477" }
    ]
  },

  {
    title:   "ECHO: Environmental Sound Classification with Hierarchical Ontology-guided Semi-Supervised Learning",
    authors: "Pranav Gupta, Raunak Sharma, Rashmi Kumari, Sri Krishna Aditya, Shwetank Choudhary, Sumit Kumar, Kanchana M, R Thilagavathy",
    venue:   "IEEE CONECCT",
    year:    "2024",
    image:   "new_images/samsung.png",
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/10677303" },
      { label: "arXiv",       url: "https://arxiv.org/abs/2409.14043" }
    ]
  },

  {
    title:   "ISAApp — Image Based Smart Attendance Application",
    authors: "Aritra Dutta, G Suseela, G Niranjana, Pushpita Boral, Pranav Gupta, Subha Bal Pal",
    venue:   "AAIMB",
    year:    "2023",
    image:   "new_images/isaap.png",
    links: [
      { label: "Springer", url: "https://link.springer.com/chapter/10.1007/978-3-031-73065-8_5" }
    ]
  },

  {
    title:   "Managing Congregations of People by Predicting Likelihood of Infection by a Contagious Disease",
    authors: "Pranav Gupta, Manish Gupta",
    venue:   "IEEE CCEM",
    year:    "2020",
    image:   "new_images/managingcongregations.png",
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/9499968" },
      { label: "code",        url: "https://github.com/pranavgupta2603/covid-spread-simulation" }
    ]
  }

];


/* ============================================================
   CODE — use { group: "Heading" } to start a new section.
   ============================================================ */

const CODE = [
  { group: "Paper implementations" },
  { name: "CLIP-ViL-GradCAM",        note: "CLIP-ViL in PyTorch with attention maps.",        url: "https://github.com/pranavgupta2603/CLIP-ViL-GradCAM" },
  { name: "SimCLR on UrbanSound8K",  note: "Contrastive audio pretraining, 81% accuracy.",    url: "https://github.com/pranavgupta2603/SimCLR-UrbanSound8K" },
  { name: "CLIP",                    note: "Built from scratch, extended toward VQA.",        url: "https://github.com/pranavgupta2603/CLIP-Implementation" },
  { name: "MusicLM / AudioLDM",      note: "Text-to-audio diffusion on MusicCaps.",           url: "https://github.com/pranavgupta2603/musiclm-training" },
  { name: "Siamese net, triplet loss", note: "FaceNet embeddings on a ship dataset I scraped.", url: "https://github.com/pranavgupta2603/ship-classification" },
  { name: "AI algorithms from scratch", note: "Gradient descent and k-means in NumPy.",       url: "https://github.com/pranavgupta2603/AI-algorithm-implementations" },

  { group: "Side projects" },
  { name: "AI Wordle Solver",          note: "Screenshot in, next best word out.",            url: "https://github.com/pranavgupta2603/AI_Worldle_Solver" },
  { name: "Search Browser History GPT", note: "Ask your browsing history a question.",         url: "https://github.com/pranavgupta2603/SearchBrowserHistoryGPT" },
  { name: "Splitwise GPT Vision",      note: "Photo of a bill becomes Splitwise entries.",     url: "https://github.com/pranavgupta2603/SplitwiseGPTVision" },
  { name: "Genetic handwritten digits", note: "Evolving CNN shapes with genetic algorithms.",  url: "https://github.com/pranavgupta2603/genetic-handwritten-digits" },
  { name: "Face recognition on LFW",   note: "Embeddings plus SVMs across 86 identities.",     url: "https://github.com/pranavgupta2603/Face-Recognition" }
];


/* ============================================================
   WRITING — newest first.
   ============================================================ */

const POSTS = [
  { date: "Jan 2026", title: "Hiking Zion and the Grand Canyon",                    url: "https://pranavgupta2603.github.io/pranav-blogs/pranav/2026/01/19/my-experience-hiking-in-zion-and-grand-canyons.html" },
  { date: "Jan 2025", title: "Undergrad in India: a mistake?",                       url: "https://pranavgupta2603.github.io/pranav-blogs/pranav/2025/01/20/hi-i-am-pranav.html" },
  { date: "Mar 2023", title: "How genetic algorithms boost handwritten digit models", url: "https://pranavgupta2603.github.io/pranav-blogs/2023/03/02/evolving-perfection-how-genetic-algorithms-boost-handwritten-digits-models.html" },
  { date: "Mar 2022", title: "Face recognition with embeddings and SVMs",             url: "https://pranavgupta2603.github.io/pranav-blogs/2022/03/20/create-a-face-recognition-model-using-face-embeddings-and-scikit-learn-s-support-vector-machines.html" },
  { date: "Feb 2022", title: "Automating Wordle using computer vision",               url: "https://pranavgupta2603.github.io/pranav-blogs/2022/02/06/automating-the-game-wordle-using-computer-vision.html" },
  { date: "Jul 2019", title: "Google and R in a simple physics experiment",           url: "https://pranavgupta2603.github.io/pranav-blogs/2019/07/27/bringing-google-and-r-in-a-simple-physics-experiment.html" }
];
