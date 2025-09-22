export interface Post {
  id: number;
  title: string;
  body: string;
}

export const samplePosts: Post[] = [
  {
    id: 1,
    title: "The Rise of Artificial Intelligence",
    body: `Artificial Intelligence (AI) has grown rapidly over the past decade, moving from research labs into everyday life. AI systems are now capable of recognizing images, understanding human speech, translating languages, recommending products, and even composing music.

The driving forces behind this growth include advances in computing power, availability of massive datasets, and new algorithms in machine learning and deep learning. Companies across industries are integrating AI into products and services, making it one of the most transformative technologies of our time.

From autonomous vehicles to personalized medicine, AI is reshaping how we live, work, and interact. But with great power comes great responsibility—ethical considerations, data privacy, and algorithmic bias are now central to AI development.

As we look ahead, the question isn't whether AI will change the world, but how we will shape its impact. Will it empower humanity or deepen inequality? The answer lies in how we build, regulate, and deploy these technologies.`,
  },
  {
    id: 2,
    title: "Understanding Machine Learning: A Beginner’s Guide",
    body: `Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data. Instead of being explicitly programmed, ML models identify patterns and make predictions based on input data.

There are three main types of ML:
- Supervised Learning: Models learn from labeled data (e.g., predicting house prices).
- Unsupervised Learning: Models find hidden patterns in unlabeled data (e.g., customer segmentation).
- Reinforcement Learning: Models learn by trial and error, receiving rewards or penalties (e.g., game-playing agents).

Training an ML model involves feeding it data, optimizing its parameters, and evaluating its performance. Common algorithms include decision trees, support vector machines, and neural networks.

ML is used in spam detection, recommendation systems, fraud prevention, and more. As tools like TensorFlow and PyTorch become more accessible, ML is no longer just for researchers—developers and hobbyists are building intelligent apps every day.`,
  },
  {
    id: 3,
    title: "Deep Learning Demystified",
    body: `Deep Learning is a powerful branch of ML that uses neural networks with many layers—hence the term "deep." These models excel at processing large amounts of unstructured data like images, audio, and text.

At the heart of deep learning are artificial neurons, which mimic the way biological neurons transmit signals. Layers of these neurons form architectures like:
- Feedforward Neural Networks
- Convolutional Neural Networks (CNNs)
- Recurrent Neural Networks (RNNs)
- Transformers

CNNs are great for image recognition, RNNs for sequential data like time series or language, and Transformers (like GPT) for natural language processing.

Training deep models requires massive datasets and computational power, often using GPUs. Techniques like dropout, batch normalization, and transfer learning help improve performance and reduce overfitting.

Deep learning has enabled breakthroughs in autonomous driving, medical diagnostics, and real-time translation. But it also raises questions about explainability—how do we trust models we can't fully understand?`,
  },
  {
    id: 4,
    title: "Ethics in AI: Navigating the Moral Maze",
    body: `As AI systems become more powerful, ethical concerns grow louder. Can machines be fair? Who is accountable when algorithms make mistakes?

Bias in training data can lead to discriminatory outcomes. For example, facial recognition systems have shown lower accuracy for people of color due to biased datasets. Hiring algorithms may favor certain demographics if trained on historical data reflecting past inequalities.

Transparency is another issue. Many AI models are black boxes—highly accurate but hard to interpret. Explainable AI (XAI) aims to make decisions understandable to humans.

Privacy is also at stake. AI systems often rely on personal data, raising concerns about surveillance and consent.

To address these challenges, developers must adopt ethical frameworks, conduct fairness audits, and engage diverse stakeholders. Governments and organizations are beginning to regulate AI, but the pace of innovation often outstrips policy.

Ultimately, ethical AI isn't just a technical challenge—it's a societal one.`,
  },
  {
    id: 5,
    title: "Natural Language Processing: Teaching Machines to Understand Us",
    body: `Natural Language Processing (NLP) is the field of AI that enables machines to understand, interpret, and generate human language.

Early NLP systems relied on rule-based approaches, but modern models use statistical and deep learning techniques. Key concepts include:
- Tokenization: Breaking text into words or phrases
- Part-of-Speech Tagging: Identifying nouns, verbs, etc.
- Named Entity Recognition: Detecting names, places, dates
- Sentiment Analysis: Determining emotional tone

Word embeddings like Word2Vec and GloVe represent words as vectors, capturing semantic relationships. Transformers revolutionized NLP by introducing attention mechanisms, allowing models to focus on relevant parts of input.

Applications include chatbots, voice assistants, translation tools, and content moderation. Models like BERT and GPT have set new benchmarks in language understanding.

NLP is still evolving—handling sarcasm, idioms, and cultural context remains a challenge. But the progress is undeniable: machines are learning to speak our language.`,
  },
  {
    id: 6,
    title: "How Recommendation Systems Work",
    body: `Ever wondered how Netflix knows what you want to watch? Recommendation systems are behind the scenes, analyzing your behavior to suggest content.

There are two main types:
- Content-Based Filtering: Recommends items similar to those you've liked
- Collaborative Filtering: Recommends items liked by users with similar tastes

Hybrid systems combine both approaches for better accuracy. Techniques include:
- Matrix Factorization
- K-Nearest Neighbors
- Deep Learning models

Data used includes viewing history, ratings, search queries, and even time spent on content. Challenges include cold start (new users/items), scalability, and diversity.

Recommendation systems are used in e-commerce, music streaming, social media, and more. They personalize experiences but also raise concerns about filter bubbles and privacy.

Designing a good recommender involves balancing relevance, novelty, and serendipity.`,
  },
  {
    id: 7,
    title: "The Math Behind Machine Learning",
    body: `Machine Learning is powered by math—especially linear algebra, calculus, and probability.

Linear algebra helps represent data and model parameters using vectors and matrices. Operations like dot products and matrix multiplication are fundamental to neural networks.

Calculus enables optimization. Gradient descent, the backbone of training, uses derivatives to minimize loss functions.

Probability and statistics help model uncertainty, evaluate predictions, and understand data distributions. Concepts like Bayes’ theorem, likelihood, and entropy are key.

Understanding the math improves intuition and debugging. You don’t need a PhD, but grasping the basics makes you a better ML practitioner.

Resources like Khan Academy, 3Blue1Brown, and StatQuest make learning math fun and visual.`,
  },
  {
    id: 8,
    title: "Building Your First ML Model",
    body: `Ready to get hands-on with ML? Let’s build a simple model to predict house prices.

Steps:
1. Collect data (e.g., number of rooms, location, price)
2. Preprocess data (handle missing values, normalize)
3. Split into training and testing sets
4. Choose a model (e.g., linear regression)
5. Train the model
6. Evaluate performance (e.g., RMSE)
7. Tune hyperparameters
8. Deploy the model

Tools like scikit-learn make this process smooth. You can visualize results with matplotlib or seaborn.

Start small, iterate often, and document your process. ML is experimental—don’t be afraid to fail and learn.`,
  },
  {
    id: 9,
    title: "Deploying ML Models to Production",
    body: `Training a model is just the beginning. Deploying it means making it available to users.

Steps:
- Serialize the model (e.g., Pickle, ONNX)
- Create an API (e.g., Flask, FastAPI)
- Containerize with Docker
- Host on cloud (e.g., AWS, Azure, Heroku)
- Monitor performance and retrain as needed

Challenges include latency, scalability, and versioning. MLOps tools like MLflow and Kubeflow help manage the lifecycle.

Security is critical—protect endpoints and data. Logging and alerts help catch issues early.

Deployment turns ML from a notebook experiment into a real-world solution.`,
  },
  {
    id: 10,
    title: "The Future of AI: What’s Next?",
    body: `AI is evolving fast. What’s on the horizon?

- Artificial General Intelligence (AGI): Machines that can perform any intellectual task a human can
- AI in creativity: Generating art, music, and stories
- AI in medicine: Personalized treatments, drug discovery
- AI in education: Adaptive learning platforms

Risks include job displacement, misinformation, and ethical dilemmas. Regulation and public discourse are essential.

Developers play a key role in shaping AI’s future. Build responsibly, think critically, and stay curious.

The future isn’t written yet—but AI will help write it.`,
  },
];
