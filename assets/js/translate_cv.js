const toggleButton = document.getElementById('language-toggle');
const aboutSection = document.getElementById('about');
const experiencesSection = document.getElementById('experiences');
const achievementsSection = document.getElementById('achievements');
const skillsSection = document.getElementById('skills');

const contentBN = {
about: `
        <div class="units-row units-split wrap">
            <!-- <div class="unit-20">
                <img src="img/ava.jpg" alt="Avatar">
            </div> -->
            <div class="unit-80">
                <h1>CHAALAL Mohamed<br><span id="typed"></span></h1>
            </div>
            <p>
                Data Science student looking for opportunities to innovate and solve problems through
                data analysis, artificial intelligence and the development of learning models
                automatic. Skills in database management and big data applications. Motivated to
                leverage analytical talents to create impactful data-driven solutions.
            </p>
        </div>
`,
experiences: `
<h2>Experience</h2>
<ul class="work-list">
<li>Data Scientist - Intern</li>
<li><a href="#">Luxembourg Institute of Science & Technology, Luxembourg</a></li>
<li style="color: #8c8c8c;">March 2023 - August 2023</li>
</ul>
<ul style="list-style-type: none;">
<li>
    <ul style="padding-left: 14pt;">
        <li>Conduct a state-of-the-art review on tools and techniques used for entity resolution.</li>
        <li>Evaluate a selection of methods using machine learning in the knowledge graph containing more than 200,000 nodes and relationships.</li>
        <li>Design and implement improved methods in Python, in the form of a set of libraries</li>
    </ul>
</li>
</ul>
<br>
<ul class="work-list">
<li>Data Analyst - Intern</li>
<li><a href="#">BNP Paribas, Algeria</a></li>
<li style="color: #8c8c8c;">April 2022 - July 2022</li>
</ul>
<ul style="list-style-type: none;">
<li>
    <ul style="padding-left: 14pt;">
        <li>Development of a customer-centric dynamic pricing model for adaptive pricing strategies</li>
        <li>Customer segmentation to identify homogeneous families to adapt prices and differentiated rates, using unsupervised models (K-means, DBSAN, etc.).</li>
        <li>Evaluation of results using several measures (Silhouette coefficient, Dunn index, etc.).</li>
    </ul>
</li>
</ul>
<br>
<ul class="work-list">
<li>R&D - Intern</li>
<li><a href="#">CERIST, Algeria</a></li>
<li style="color: #8c8c8c;">June 2021 - July 2021</li>
</ul>
<ul style="list-style-type: none;">
<li>
    <ul style="padding-left: 14pt;">
        <li>Detection and recognition of license plates using artificial intelligence</li>
        <li>Image processing and application of various morphological transformations.</li>
        <li>Implementation of a deep learning model (CNN)</li>
    </ul>
</li>
</ul>
`,
achievements: `
<h2>Education</h2>
    <ul class="award-list list-flat">
        <li>Master Machine Learning for Data Science</li>
        <li><i><a href="https://u-paris.fr/" target="_blank">Université Paris Cité</a></i></li>
        <li style="color: #8c8c8c;">Sep 2023 - Present</li>
    </ul>
    <ul class="award-list list-flat">
        <li>Engineer + Master Data Science & Artificial Intelligence</li>
        <li><i><a href="https://www.enp.edu.dz/" target="_blank">École Nationale Polytechnique d'Alger (ENP)</a></i></li>
        <li style="color: #8c8c8c;">Sep 2020 - Sep 2023</li>
    </ul>
    <ul class="award-list list-flat">
        <li>Preparatory Classes in Science and Technology</li>
        <li><i><a href="#" target="_blank">Ecole Nationale Supérieure des Technologies Avancées (Ex. ESSA)</a></i></li>
        <li style="color: #8c8c8c;">Sep 2018 - Sep 2020 </li>
    </ul>
    </div>
`,
skills: `
<h2>Tech Skills</h2>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Languages</li>
    <li>Python / JAVA / R / SQL </li>
</ul>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Machine Learning & AI</li>
    <li>Scikit-learn / Pytorch / HF-Transformers / LLMs (Fine-tuning)</li>
</ul>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Database</li>
    <li>MySQL / Postgresql / MongoDB</li>
</ul>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Others</li>
    <li> Hadoop - MapReduce, Apache Spark <br> AWS (Athena, S3, Redshift) / CI/CD (Git, Jenkins) / Orchestration (Docker, Kubernetes)
        </li>
</ul>
`
};

const contentEN = {
about: `
        <div class="units-row units-split wrap">
            <!-- <div class="unit-20">
                <img src="img/ava.jpg" alt="Avatar">
            </div> -->
            <div class="unit-80">
                <h1>CHAALAL Mohamed<br><span id="typed"></span></h1>
            </div>
            <p>
                Étudiant en Data Science à la recherche d'opportunités d'innover et de résoudre des problèmes par
                l'analyse de données, l'intelligence artificiel et le développement de modèles d'apprentissage
                automatique. Compétences en gestion de bases de données et en applications big data. Motivé pour
                exploiter ses talents analytiques afin de créer des solutions impactantes basées sur les données.
            </p>
        </div>
`,
experiences: `
<h2>EXPÉRIENCE</h2>
<ul class="work-list">
    <li>Data Scientist - Stagiaire</li>
    <li><a href="#">Luxembourg Institute of Science & Technology, Luxembourg</a></li>
    <li style="color: #8c8c8c;">Mars 2023 - Août 2023</li>
</ul>
<ul style="list-style-type: none;">
    <li>
        <ul style="padding-left: 14pt;">
            <li>Réaliser une revue de l'état de l'art sur les outils et les techniques utilisés pour la résolution d'entités.</li>
            <li>Évaluer une sélection de méthodes utilisant l'apprentissage automatique dans le graphe de
                connaissances comprenant plus de 200 000 nœuds et relations.</li>
            <li>Concevoir et mettre en œuvre les méthodes améliorées en Python, sous forme d'un ensemble de
                libraries</li>
        </ul>
    </li>
</ul>
<br>
<ul class="work-list">
    <li>Data Analyst - Stagiaire</li>
    <li><a href="#">BNP Paribas, Algérie</a></li>
    <li style="color: #8c8c8c;">Avr 2022 - Juill 2022</li>
</ul>
<ul style="list-style-type: none;">
    <li>
        <ul style="padding-left: 14pt;">
            <li>Développement d'un modèle de tarification dynamique centré sur les clients pour des stratégies de
                prix adaptatives</li>
            <li>Segmentation des clients afin d'identifier les familles homogènes pour adapter les prix et les tarifs
                différenciés, à l'aide de modèles non supervisés (K-means, DBSAN, etc).</li>
            <li>Évaluation des résultats à l'aide de plusieurs mesures (coefficient de Silhouette, indice de Dunn, etc).</li>
        </ul>
    </li>
</ul>
<br>
<ul class="work-list">
    <li>R&D - Stagiaire</li>
    <li><a href="#">CERIST, Algérie</a></li>
    <li style="color: #8c8c8c;">Juin 2021 - Juill 2021</li>
</ul>
<ul style="list-style-type: none;">
    <li>
        <ul style="padding-left: 14pt;">
            <li>Détection et reconnaissance de plaques d'immatriculation à l'aide de l'intelligence artificielle</li>
            <li>Traitement d'images et application de différentes transformations morphologiques.</li>
            <li>Mise en œuvre d'un modèle d'apprentissage en profondeur (CNN)</li>
        </ul>
    </li>
</ul>
`,
achievements: `
<h2>FORMATION ACADÉMIQUE</h2>
<ul class="award-list list-flat">
    <li>Master Machine Learning
        pour la Data Science</li>
        <li> <i><a href="https://u-paris.fr/" target="_blank">Université Paris Cité</a></i></li>
    <li style="color: #8c8c8c;">Sep 2023 - Aujourd'hui</li>
</ul>
<ul class="award-list list-flat">
    <li>Ingénieur + Master Data Science & Artificial Intelligence</li>
    <li> <i><a href="https://www.enp.edu.dz/" target="_blank">École Nationale Polytechnique d'Alger (ENP)</a></i></li>
    <li style="color: #8c8c8c;">Sep 2020 - Sep 2023</li>
</ul>
<ul class="award-list list-flat">
    <li>Classes préparatoires
        Sciences et technologies</li>
    <li> <i><a href="#" target="_blank">Ecole Nationale Supérieure des Technologies Avancées (Ex. ESSA)</a></i></li>
    <li style="color: #8c8c8c;">Sep 2018 - Sep 2020 </li>
</ul>

`,
skills: `
<h2>Compétences</h2>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Languages</li>
    <li>Python / JAVA / R / SQL </li>
</ul>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Machine Learning & AI</li>
    <li>Scikit-learn / Pytorch / HF-Transformers / LLMs (Fine-tuning)</li>
</ul>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Database</li>
    <li>MySQL / Postgresql / MongoDB</li>
</ul>
<ul class="skill-list list-flat">
    <li style="color: #8c8c8c;">Divers</li>
    <li> Hadoop - MapReduce, Apache Spark <br> AWS (Athena, S3, Redshift) / CI/CD (Git, Jenkins) / Orchestration (Docker, Kubernetes)
        </li>
</ul>
`
};

function createContentElement(html) {
const contentElement = document.createElement('div');
contentElement.innerHTML = html;
return contentElement;
}

toggleButton.addEventListener('change', function() {
const langContent = this.checked ? contentBN : contentEN;

aboutSection.innerHTML = langContent.about;
experiencesSection.innerHTML = langContent.experiences;
achievementsSection.innerHTML = langContent.achievements;
skillsSection.innerHTML = langContent.skills;
});

