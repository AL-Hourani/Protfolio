

import { Button  } from "@/components/ui/button";
import { ArrowLeft, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import { Card } from "@/components/ui/card";

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
    <div className="min-h-screen bg-gradient-to-b from-github-dark to-github-darker text-github-text py-16">
      <div className="container mx-auto max-w-5xl px-4">

        {/* Back Button */}
        <Link to="/">
          <Button variant="outline" className="mb-8 flex gap-2 hover:bg-github-accent/10 transition-all">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">Multi-Dendrite Learning Neuron</h1>
          <p className="text-github-accent text-lg font-medium">
            Jaafar Al-Hourani — Independent AI Research
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-github-accent/20 via-github-accent to-github-accent/20 mt-4 rounded-full"></div>
        </div>

        {/* Sections Wrapper */}
        <div className="space-y-12">

          {/* Abstract */}
          <Card className="p-8 bg-github-medium/50 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all">
            <h2 className="text-3xl font-bold mb-4 border-b border-github-accent/30 pb-2">Abstract</h2>
            <p className="opacity-90 leading-relaxed text-lg">
              In this work we explore a biologically inspired neuron model
              composed of multiple dendritic branches. Each dendrite learns
              using a different local learning rule such as Hebbian learning,
              predictive error learning, and coactivity learning. Instead of
              relying on global backpropagation, learning occurs locally
              within each dendritic branch. The neuron integrates dendritic
              outputs in the soma using adaptive weights, allowing the neuron
              to dynamically prioritize the most informative dendrites.
            </p>
          </Card>

          {/* Motivation */}
          <Card className="p-8 bg-github-medium/50 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all">
            <h2 className="text-3xl font-bold mb-4 border-b border-github-accent/30 pb-2">Motivation</h2>
            <p className="opacity-90 leading-relaxed text-lg">
              Traditional artificial neural networks rely heavily on
              backpropagation. Biological neurons, however, contain multiple
              dendritic branches that perform local computations independently.
              This research explores whether a neuron with multiple learning
              dendrites can perform useful computations using purely local
              learning rules.
            </p>
          </Card>

          {/* Model Architecture */}
          <Card className="p-8 bg-github-medium/50 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all">
            <h2 className="text-3xl font-bold mb-4 border-b border-github-accent/30 pb-2">Model Architecture</h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>A neuron contains multiple dendrites.</li>
              <li>Each dendrite receives the same input vector.</li>
              <li>Each dendrite learns using a different local rule.</li>
              <li>The soma integrates dendritic outputs.</li>
              <li>Each dendrite has an adaptive influence weight α.</li>
            </ul>
          </Card>

          {/* Learning Rules */}
          <Card className="p-8 bg-github-medium/50 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all">
            <h2 className="text-3xl font-bold mb-4 border-b border-github-accent/30 pb-2">Learning Rules</h2>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Hebbian Learning</li>
              <li>Predictive Error Learning</li>
              <li>Coactivity Learning</li>
            </ul>
          </Card>

          {/* Implementation / Code */}
          <Card className="p-8 bg-github-medium/50 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all">
            <h2 className="text-3xl font-bold mb-4 border-b border-github-accent/30 pb-2">Implementation</h2>
            <p className="mb-6 opacity-80 text-lg">
              Below is a simplified implementation of the multi-dendrite neuron used in experiments.
            </p>
            <CodeBlock code={neuronCode} />
          </Card>

          {/* Experiments */}
          <Card className="p-8 bg-github-medium/50 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all">
            <h2 className="text-3xl font-bold mb-4 border-b border-github-accent/30 pb-2">Experiments</h2>
            <p className="opacity-90 leading-relaxed text-lg">
              Experiments were performed on synthetic datasets with multiple input features.
              The neuron was tested on tasks requiring aggregation and approximation of input signals.
              Results show that combining multiple dendritic learning rules improves adaptability compared to a single-rule neuron.
            </p>
          </Card>

          {/* Results */}
          <Card className="p-8 bg-github-medium/50 backdrop-blur-md border border-github-accent/20 hover:border-github-accent/50 transition-all">
            <h2 className="text-3xl font-bold mb-4 border-b border-github-accent/30 pb-2">Results</h2>
            <p className="opacity-90 leading-relaxed text-lg">
              The neuron successfully learned approximate mappings between input vectors and target outputs using purely local learning mechanisms.
              Adaptive dendritic weights allowed the neuron to dynamically emphasize the most useful learning rule during training.
            </p>
          </Card>

        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-16 justify-center">
          <Button variant="outline" className="flex items-center gap-2 hover:bg-github-accent/10 transition-all">
            <Github size={18} />
            Source Code
          </Button>
          <Button variant="outline" className="flex items-center gap-2 hover:bg-github-accent/10 transition-all">
            <FileText size={18} />
            Download PDF
          </Button>
        </div>

      </div>
    </div>
  );
};

export default MultiDendritePaper;