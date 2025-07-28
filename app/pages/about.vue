<template>
  <div class="relative bg-slate-200">
    <NuxtLink
      to="/"
      class="absolute top-4 right-10 text-blue-600 hover:underline font-medium"
    >
      ⬅️ Back to Dashboard
    </NuxtLink>

    <main class="p-6 space-y-6 max-w-5xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-800">📘 About This Project</h1>

      <section>
        <h2 class="text-lg font-semibold">📊 Project Overview</h2>
        <p class="text-gray-700 mt-2">
          This dashboard was built to visualize survey responses from HubSpot's evaluation data. The goal was to demonstrate proficiency in Nuxt, data handling, and charting libraries by building an interactive and responsive single-page application. The dataset provided was pre-cleaned static JSON containing responses from ~15,000 participants.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold">❓ Why Question 1 (Q1) Was Selected</h2>
        <p class="text-gray-700 mt-2">
          Question 1 was selected because it had the most complete, structured, and high-volume data among all questions. Its responses were clear, categorical, and easy to visualize.
          <br /><br />
          Given the limited timeframe for the assignment, Q1 provided the most reliable and practical basis for meaningful visualization without requiring heavy data cleaning or assumptions.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold">✅ What I Completed</h2>
        <ul class="list-disc ml-6 text-gray-700">
          <li>Nuxt 3 project setup with TypeScript (used Nuxt 4 instead)</li>
          <li>Loaded static HubSpot survey data via composable</li>
          <li>Integrated Chart.js for Q1 response visualization</li>
          <li>Implemented dynamic filtering by company size</li>
          <li>Refined checkbox layout using Tailwind Flexbox</li>
          <li>Added responsive padding and layout tuning across screen sizes</li>
          <li>Used native JS for data aggregation (group & sum)</li>
          <li>Styled entire dashboard with TailwindCSS for a clean, minimal UI</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold">⏱ Time Breakdown</h2>
        <ul class="list-disc ml-6 text-gray-700">
          <li>Hour 1: Nuxt setup, Chart.js integration</li>
          <li>Hour 2: Static data loading & processing</li>
          <li>Hour 3: Checkbox filters, chart updates</li>
          <li>Hour 4: Styling + layout + responsive design</li>
          <li>Hour 5: Debugging, error resolution, documentation polish</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold">🚧 Next Steps</h2>
        <ul class="list-disc ml-6 text-gray-700">
          <li>Add industry & quarter filters</li>
          <li>Improve mobile responsiveness further</li>
          <li>Enable chart update transitions & animations</li>
          <li>Add unit tests for filtering and aggregation</li>
          <li>Optimize performance with memoization or watchers</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold">⚙ Technical Choices</h2>
        <ul class="list-disc ml-6 text-gray-700">
          <li><strong>Requirement:</strong> Use Nuxt 3</li>
          <li><strong>Implementation:</strong> Used <span class="font-semibold">Nuxt 4</span> for better compatibility with latest libraries and tooling</li>
          <li>Vue 3 with Composition API & TypeScript</li>
          <li>Chart.js for visualizing response breakdowns</li>
          <li>Tailwind CSS for clean, responsive styling</li>
          <li>Manual JavaScript for aggregation logic for clarity and reliability</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold">❗ Errors Encountered & How I Solved Them</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Initially, I attempted to use <code class="bg-gray-100 px-1 rounded">pandas-js</code> to perform
            groupBy + aggregation:
          </p>
          <pre class="bg-gray-900 text-white text-sm rounded p-4 overflow-x-auto"><code>
const df = new pd.DataFrame(filtered);
const aggregated = df
  .groupBy('responseValue')
  .sum('numResponses')
  .sortValues('numResponses', { ascending: false })
  .toJSON();
          </code></pre>

          <p>This failed at runtime with:</p>
          <pre class="bg-red-100 text-red-700 p-3 rounded text-sm overflow-x-auto">
500 - df.groupBy is not a function
          </pre>

          <p>Also, TypeScript flagged this:</p>
          <pre class="bg-yellow-100 text-yellow-800 p-3 rounded text-sm overflow-x-auto">
Could not find a declaration file for module 'pandas-js'
          </pre>

          <p>I resolved it by writing a native JavaScript aggregation instead:</p>
          <pre class="bg-gray-900 text-white text-sm rounded p-4 overflow-x-auto"><code>
const aggregatedMap = {}

for (const entry of filtered) {
  const response = entry.responseValue
  const count = entry.numResponses

  if (!aggregatedMap[response]) {
    aggregatedMap[response] = 0
  }
  aggregatedMap[response] += count
}

const sortedEntries = Object.entries(aggregatedMap).sort(
  (a, b) => b[1] - a[1]
)

const labels = sortedEntries.map(([key]) => key)
const values = sortedEntries.map(([, value]) => value)
          </code></pre>

          <img
            src="/images/groupbyError.png"
            alt="groupBy error in pandas-js"
            class="rounded-lg shadow-lg w-full md:w-1/2 mx-auto border"
          />
          <p class="pt-2 italic text-sm text-gray-500 text-center">
            Screenshot showing groupBy error during development
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-lg font-semibold">🔗 Navigation Links</h2>
        <p class="text-gray-700">
          To improve usability and meet the documentation requirement:
        </p>
        <ul class="list-disc ml-6 text-gray-700 mt-2">
          <li><strong>About Link:</strong> Placed at the top-right of the dashboard to navigate to this About page</li>
          <li><strong>Back to Dashboard:</strong> Placed at the top-right of this page to return to the dashboard</li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold">🛠️ Tools & Research Support</h2>
        <p class="text-gray-700 mt-2">
          During development, I referred to Stack Overflow, Reddit, and a few blog posts to troubleshoot Nuxt and Chart.js issues. AI tools were lightly used to help with syntax suggestions, layout decisions, and resolving CSS quirks — but the core implementation was manual and customized for this task.
        </p>
      </section>

      <section>
        <h2 class="text-lg font-semibold">🧠 Key Learnings & Reflection</h2>
        <ul class="list-disc ml-6 text-gray-700 mt-2">
          <li>Type safety matters when choosing JavaScript libraries</li>
          <li>Sometimes writing native logic is more reliable than relying on third-party packages</li>
          <li>Tailwind CSS enables fast prototyping and clean layout control</li>
          <li>Planning data selection early saves time in implementation</li>
        </ul>
        <p class="text-gray-700 mt-4">
          Overall, this was a focused and enriching exercise that pushed me to work efficiently with modern Vue tooling and clean data visualization practices under a time constraint.
        </p>
      </section>
    </main>
  </div>
</template>
