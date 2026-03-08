import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";





const neuronCode = `
import numpy as np

# -----------------------------
# -----------------------------
class Dendrite:
    def __init__(self, input_size, learning_rule="hebbian", learning_rate=0.01):
        self.weights = np.random.randn(input_size) * 0.1
        self.rule = learning_rule
        self.lr = learning_rate
        self.last_input = None
        self.last_output = None

    def forward(self, x):
        self.last_input = x
        z = np.dot(self.weights, x)
        self.last_output = max(0, z)   # ReLU
        return self.last_output

    def update(self, neuron_output, target):
        if self.rule == "hebbian":
            delta = self.lr * self.last_input * self.last_output
            self.weights += delta

        elif self.rule == "predictive":
            error = target - neuron_output
            delta = self.lr * error * self.last_input
            self.weights += delta

        elif self.rule == "coactivity":
            delta = self.lr * self.last_input
            self.weights += delta

# -----------------------------
# -----------------------------
class MultiDendriteNeuron:
    def __init__(self):
        self.dendrites = []

    def add_dendrite(self, input_size, rule):
        d = Dendrite(input_size, rule)
        self.dendrites.append(d)

    def remove_dendrite(self, index):
        self.dendrites.pop(index)

    def forward(self, x):
        dendrite_outputs = []
        for d in self.dendrites:
            out = d.forward(x)
            dendrite_outputs.append(out)
        soma_input = sum(dendrite_outputs)
        neuron_output = max(0, soma_input)   # ReLU في soma
        return neuron_output

    def learn(self, neuron_output, target):
        for d in self.dendrites:
            d.update(neuron_output, target)

# -----------------------------
# -----------------------------
neuron = MultiDendriteNeuron()
neuron.add_dendrite(3, "hebbian")
neuron.add_dendrite(3, "predictive")
neuron.add_dendrite(3, "coactivity")

# -----------------------------
# -----------------------------
X = np.array([
    [1,1,0],
    [0,1,1],
    [0,0,1],
    [1,0,0]
])

Y = np.array([2,2,1,1])

# -----------------------------
# -----------------------------
for epoch in range(50):
    total_loss = 0
    for x, target in zip(X, Y):
        y = neuron.forward(x)
        loss = (target - y)**2
        total_loss += loss
        neuron.learn(y, target)
    if epoch % 10 == 0:
        print("epoch:", epoch, "loss:", total_loss)

# -----------------------------

# -----------------------------
print("\nTesting")
for x, target in zip(X, Y):
    y = neuron.forward(x)
    print("input:", x, "expected:", target, "output:", round(y, 3))
`

const MultiDendritePaper = () => {
  return (
    <div className="min-h-screen bg-github-dark text-github-text ">

      <div className="container mx-auto max-w-4xl">

        {/* Back button */}
        <Link to="/">
          <Button variant="outline" className="mb-10 flex gap-2">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Multi-Dendrite Learning Neuron
        </h1>

        <p className="text-github-accent mb-10">
          Jaafar Al-Hourani — Independent AI Research
        </p>

        {/* Abstract */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Abstract</h2>

          <p className="opacity-90 leading-relaxed">
            In this work we explore a biologically inspired neuron model
            composed of multiple dendritic branches. Each dendrite learns
            using a different local learning rule such as Hebbian learning,
            predictive error learning, and coactivity learning.
            Instead of relying on global backpropagation, learning occurs
            locally within each dendritic branch.
            The neuron integrates dendritic outputs in the soma using
            adaptive weights, allowing the neuron to dynamically prioritize
            the most informative dendrites.
          </p>
        </section>

        {/* Motivation */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Motivation</h2>

          <p className="opacity-90 leading-relaxed">
            Traditional artificial neural networks rely heavily on
            backpropagation for training. However, biological neurons do not
            appear to implement backpropagation directly. Real neurons
            contain multiple dendritic branches that can perform local
            computations and learning independently.
            This research explores whether a neuron composed of multiple
            learning dendrites can perform useful computation using purely
            local learning rules.
          </p>
        </section>

        {/* Model */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Model Architecture</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>A neuron contains multiple dendrites.</li>
            <li>Each dendrite receives the same input vector.</li>
            <li>Each dendrite learns using a different local rule.</li>
            <li>The soma integrates dendritic outputs.</li>
            <li>Each dendrite has an adaptive influence weight α.</li>
          </ul>
        </section>

        {/* Learning Rules */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Learning Rules</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Hebbian Learning</li>
            <li>Predictive Error Learning</li>
            <li>Coactivity Learning</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-6">
            Implementation
          </h2>

          <p className="mb-6 opacity-80">
            Below is a simplified implementation of the multi-dendrite neuron
            used in the experiments.
          </p>

          <CodeBlock code={neuronCode} />

        </section>

        {/* Experiments */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Experiments</h2>

          <p className="opacity-90 leading-relaxed">
            Experiments were performed on synthetic datasets with multiple
            input features. The neuron was tested on tasks requiring
            aggregation and approximation of input signals. Results show
            that combining multiple dendritic learning rules improves
            adaptability compared to a single-rule neuron.
          </p>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Results</h2>

          <p className="opacity-90 leading-relaxed">
            The neuron successfully learned approximate mappings between
            input vectors and target outputs using purely local learning
            mechanisms. Adaptive dendritic weights allowed the neuron to
            dynamically emphasize the most useful learning rule during
            training.
          </p>
        </section>

        {/* Links */}
        <section className="flex gap-4 mt-16">

          <Button variant="outline">
            <Github size={18} className="mr-2" />
            Source Code
          </Button>

          <Button variant="outline">
            <FileText size={18} className="mr-2" />
            Download PDF
          </Button>

        </section>

      </div>
    </div>
  );
};

export default MultiDendritePaper;