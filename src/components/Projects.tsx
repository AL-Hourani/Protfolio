import { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

import ipo from "../../public/images/po.png"
import ipot from "../../public/images/poo.png"
import ipor from "../../public/images/pth.png"
import ipof from "../../public/images/pfor.png"
import ipov from "../../public/images/pfiv.png"
import ipx from "../../public/images/px.png"
import ipe from "../../public/images/psv.png"

import im1 from "../../public/images/صورة2.png"
import im2 from "../../public/images/صورة3.png"
import im3 from "../../public/images/صورة7.png"
import im4 from "../../public/images/صورة8.png"
import im5 from "../../public/images/صورة10.png"
import im6 from "../../public/images/صورة11.png"
import im7 from "../../public/images/صورة12.png"
import im8 from "../../public/images/صورة13.png"
import im9 from "../../public/images/صورة14.png"
import im10 from "../../public/images/صورة15.png"
import im11 from "../../public/images/صورة16.png"
import im12 from "../../public/images/صورة18.png"
import im13 from "../../public/images/صورة20.png"
import im14 from "../../public/images/صورة21.png"
import LRS from "../../public/images/lrs.png"
import LRS2 from "../../public/images/lrs2.png"
import LOS from "../../public/images/Los.png"
import LOS1 from "../../public/images/los1.png"
import LOS2 from "../../public/images/los2.png"
import SVM from "../../public/images/svm.png"
import SVM1 from "../../public/images/svm1.png"
import kmeans from "../../public/images/kmeans.png"
import kmeans1 from "../../public/images/kmeans1.png"
import Heart1 from "../../public/images/Heart1.png"
import Heart2 from "../../public/images/Heart2.png"
import Heart3 from "../../public/images/Heart3.png"
import Heart4 from "../../public/images/Heart4.png"
import Heart6 from "../../public/images/Heart6.png"
import lstm from "../../public/images/lstm.png"
import lstm1 from "../../public/images/lstm1.png"
import housePDL from "../../public/images/predicthoseDL.png"
import housePDL1 from "../../public/images/predicthoueDL.png"
import heratD from "../../public/images/heratD.png"
import heratD1 from "../../public/images/heratD1.png"
import heratD2 from "../../public/images/heratD2.png"
import heratD3 from "../../public/images/heratD3.png"
import shopping1 from "../../public/images/customer_dataCluster.png"
import shopping2 from "../../public/images/customer_dataCluste1.png"
import shopping3 from "../../public/images/customer_dataCluste2.png"
import NearestNeighborsregression from "../../public/images/NearestNeighborsregression.png"
import NearestNeighborsregression1 from "../../public/images/NearestNeighborsregression1.png"
import Outlierdetection from "../../public/images/Outlierdetection.png"
import Outlierdetection1 from "../../public/images/Outlierdetection1.png"
import NearestNeighborsClassification from "../../public/images/NearestNeighborsClassification.png"
import NearestNeighborsClassification1 from "../../public/images/NearestNeighborsClassification1.png"
import digtit1 from "../../public/images/digit1.png"
import digtit2 from "../../public/images/digit2.png"
import digtit3 from "../../public/images/digit3.png"
import digtit4 from "../../public/images/digit4.png"
import digtit5 from "../../public/images/digit5.png"
import recomm1 from "../../public/images/recom-sys1.png"
import recomm2 from "../../public/images/recom-sys2.png"
import recomm3 from "../../public/images/recom-sys3.png"
import recomm4 from "../../public/images/recom-sys4.png"
import fraud1 from "../../public/images/fraud1.png"
import fraud2 from "../../public/images/fraud2.png"
import fraud3 from "../../public/images/fraud3.png"
import fraud4 from "../../public/images/fraud4.png"
import PredictCalefoHose1 from "../../public/images/calPredicthouse1.png"
import PredictCalefoHose2 from "../../public/images/calPredicthouse2.png"
import PredictCalefoHose3 from "../../public/images/calPredicthouse3.png"
import PredictCalefoHose4 from "../../public/images/calPredicthouse4.png"

type Project = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
  status?: 'live' | 'in-progress';
};

const projects: Project[] = [
    {
    title: "Shopping data clustering for customers",
    description: "An unsupervised machine learning model that analyzes shopping behavior and groups customers into clusters using Scikit-Learn clustering algorithms to discover hidden purchasing patterns.",
    tags: ["python", "sklearn"],
    images: [shopping1 , shopping2 , shopping3],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Movie Recommendation System",
    description: "Build a collaborative filtering system to suggest movies to users based on their ratings and similarity with other users",
    tags: ["python", "sklearn"],
    images: [recomm4 , recomm3 , recomm2 , recomm1 ],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Credit Card Fraud Detection",
    description: "Predict fraudulent transactions using imbalanced financial datasets. Focus on precision, recall, and anomaly detection methods.",
    tags: ["python", "sklearn"],
    images: [fraud1 , fraud2 , fraud3, fraud4 ],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Recognizing hand-written digits",
    description: "An example showing how the scikit-learn can be used to recognize images of hand-written digits.",
    tags: ["python", "sklearn"],
    images: [digtit1 , digtit2 , digtit3 ,digtit4,digtit5],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Nearest Neighbors regression",
    description: "A regression model built with the K-Nearest Neighbors algorithm that predicts continuous values by analyzing similarity between data points and evaluating prediction accuracy.",
    tags: ["python", "sklearn"],
    images: [NearestNeighborsregression , NearestNeighborsregression1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "California House Price Prediction",
    description: "Predict house prices in California using features like location, number of bedrooms, population, and median income. Apply Linear Regression or Gradient Boosting.",
    tags: ["python", "sklearn"],
    images: [PredictCalefoHose4 , PredictCalefoHose3 , PredictCalefoHose2 , PredictCalefoHose1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  //   {
  //   title: "Spam Email Cassification",
  //   description: "Classify emails as spam or ham using text features. Use NLP techniques like TF-IDF and classifiers like Multinomial Naive Bayes.",
  //   tags: ["python", "sklearn"],
  //   images: [PredictCalefoHose4 , PredictCalefoHose3 , PredictCalefoHose2 , PredictCalefoHose1],
  //   githubUrl: "#",
  //   liveUrl: "#",
  //   status: "live"
  // },
    {
    title: "Nearest Neighbors Classification",
    description: "A supervised learning model using the K-Nearest Neighbors algorithm to classify data points based on the closest labeled examples in the dataset.",
    tags: ["python", "sklearn"],
    images: [NearestNeighborsClassification , NearestNeighborsClassification],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
   {
    title: "Outlier detection",
    description: "A machine learning system designed to detect abnormal or rare data points in datasets using anomaly detection techniques implemented with Scikit-Learn.",
    tags: ["python", "sklearn"],
    images: [Outlierdetection , Outlierdetection1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Heart disease classification  using sklearn",
    description: "A machine learning model that classifies heart disease presence based on medical features using Scikit-Learn classification algorithms, with performance evaluation and visualization.",
    tags: ["python", "sklearn"],
    images: [Heart1 , Heart2 , Heart3 , Heart4 , Heart6],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Heart disease classification  using different sklearn algorithms",
    description: "A comparative study of multiple classification algorithms (Logistic Regression, SVM, KNN, Decision Tree, etc.) to identify the most effective model for heart disease prediction.",
    tags: ["python", "sklearn"],
    images: [heratD , heratD1 , heratD2 , heratD3],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "House predict   using Deep learning",
    description:"A deep learning model built with Keras to predict house prices based on numerical features, demonstrating neural network training, evaluation, and prediction accuracy",
    tags: ["python", "keras"],
    images: [housePDL , housePDL1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "LSTM Time Series Prediction",
    description: "A practical implementation of an LSTM network for time series forecasting, showing how sequential data patterns are learned and used to predict future values.",
    tags: ["python", "LSTM"],
    images: [lstm , lstm1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple K-Means Clustering using Scikit-Learn",
    description: "An introductory implementation of the K-Means clustering algorithm for unsupervised learning, including cluster visualization and interpretation.",
    tags: ["python", "sklearn"],
    images: [kmeans , kmeans1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
    {
    title: "Support Vector Machine (SVM) using Scikit-Learn",
    description: "A classification model using Support Vector Machines that demonstrates data separation, decision boundaries, and margin visualization.",
    tags: ["python", "sklearn"],
    images: [SVM , SVM1],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple Logistic Regression using Scikit-Learn",
    description: "A binary classification example using Logistic Regression, highlighting probability estimation and decision boundary visualization.",
    tags: ["python", "sklearn"],
    images: [LOS , LOS1 , LOS2],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "Simple Linear Regression using Scikit-Learn",
    description:"A basic linear regression model that learns relationships between variables and predicts continuous values, with graphical representation of the regression line." ,
    tags: ["python", "sklearn"],
    images: [LRS , LRS2],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },
  {
    title: "service health monitor (VIGIL)",
    description: "A monitoring system built with Go for tracking the availability and performance of critical services. Provides real-time alerts, logs, and dashboards to ensure system reliability and rapid issue resolution.",
    tags: ["React", "python", "Golang"],
    images: [ipo , ipe , ipot , ipof , ipx , ipov],
    githubUrl: "#",
    liveUrl: "#",
    status: "in-progress"
  },

  {
    title: "National Diabetes Program (NDP)",
    description: "A comprehensive platform designed to support the registration, management, and monitoring of diabetic patients.",
    tags: ["React", "Golang"],
    images: [im1 , im2 , im3 , im4 , im5 , im6 , im7 ,im8 , im9 , im10 , im11 , im12 , im13 , im14],
    githubUrl: "#",
    liveUrl: "#",
    status: "live"
  },


];



const Projects = () => {

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-24">

      <div className="w-[92%] max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>

          <p className="text-github-text opacity-80">
            Explore some of my recent work and machine learning projects.
          </p>

          <div className="h-1 w-20 bg-github-accent mx-auto mt-4"></div>

        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.slice(0, visibleProjects).map((project, index) => (

            <Card
              key={index}
              onClick={() => openProject(project)}
              className="cursor-pointer group overflow-hidden bg-github-medium border border-github-medium hover:border-github-accent transition duration-300"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {project.status && (
                  <span
                    className={`absolute top-3 right-3 text-xs px-2 py-1 rounded text-white
                    ${project.status === "live" ? "bg-green-500" : "bg-yellow-500"}`}
                  >
                    {project.status === "live" ? "Live" : "In Progress"}
                  </span>
                )}

              </div>

              {/* Content */}
              <div className="p-5 space-y-3">

                <h3 className="text-lg font-semibold group-hover:text-github-accent transition">
                  {project.title}
                </h3>

                <p className="text-sm text-github-text opacity-80 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-github-dark text-github-accent"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </Card>

          ))}

        </div>


        {/* Load More */}
        {visibleProjects < projects.length && (

          <div className="text-center mt-14">

            <button
              onClick={() => setVisibleProjects((prev) => prev + 6)}
              className="px-6 py-3 bg-github-accent text-white rounded-lg hover:opacity-90 transition"
            >
              Load More Projects
            </button>

          </div>

        )}


        {/* Modal */}
        {selectedProject && (

          <div   className="fixed inset-0  bg-black/80 flex items-center justify-center z-50 p-6">

            <div className="bg-github-medium   max-w-4xl w-full rounded-xl overflow-hidden relative">

              {/* Close */}



              {/* Image Slider */}
              <div className="relative h-[400px] bg-black">

                <img
                  src={selectedProject.images[imageIndex]}
                  className="w-full h-full object-contain"
                />

                {/* arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                >
                  <ChevronRight />
                </button>

              </div>


              {/* Dots */}
              <div className="flex justify-center gap-2 py-3">

                {selectedProject.images.map((_, i) => (

                  <span
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer
                    ${i === imageIndex ? "bg-github-accent" : "bg-gray-500"}`}
                  />

                ))}

              </div>


              {/* Content */}
              <div className="p-6 space-y-4">

                <h3 className="text-2xl font-bold">
                  {selectedProject.title}
                </h3>

                <p className="text-github-text opacity-80">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">

                  {selectedProject.tags.map((tag, i) => (

                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-github-dark text-github-accent"
                    >
                      {tag}
                    </span>

                  ))}

                </div>


                <div className="flex gap-6 pt-4">

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-github-accent"
                  >
                    <Github size={18} />
                    View Code
                  </a>

                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-github-accent"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

              <button
                onClick={closeProject}
                className=" text-white"
              >
                <X />
              </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Projects;