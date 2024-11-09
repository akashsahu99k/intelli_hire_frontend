// components/DescriptionPanel.js
export default function DescriptionPanel() {
    return (
      <div>
        <h2 className="text-lg font-bold">274. H-Index</h2>
        <p className="text-sm text-gray-600 mb-4">Medium</p>
        <div className="question-example border border-gray-300 px-2 pr-5 py-2">
        <p className="mb-4">
          Given an array of integers <code>citations</code> where <code>citations[i]</code> is the
          number of citations a researcher received for their <code>i<sup>th</sup></code> paper,
          return the researcher&apos;s h-index.
        </p>
        <div className="mb-4">
          <h3 className="font-semibold">Example 1:</h3>
          <p className="text-sm bg-gray-100 p-2 rounded-md">
            Input: citations = [3,0,6,1,5]
            <br />
            Output: 3
            <br />
            Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and...
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Example 2:</h3>
          <p className="text-sm bg-gray-100 p-2 rounded-md">
            Input: citations = [1,3,1]
            <br />
            Output: 1
          </p>
        </div>
        </div>
      </div>
    );
  }
  