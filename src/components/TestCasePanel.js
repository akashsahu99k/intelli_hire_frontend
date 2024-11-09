// components/TestCasePanel.js
export default function TestCasePanel() {
  const cases = [
    {
      input: "[3, 0, 6, 1, 5]",
      expectedOutput: 3,
    },
    {
      input: "[1, 3, 1]",
      expectedOutput: 1,
    },
    {
      input: "[10, 8, 5, 4, 3]",
      expectedOutput: 4,
    },
  ];

  return (
    <div className="p-4 bg-white border-t border-gray-300 ">
      <h3 className="text-md font-bold mb-2">Testcase</h3>
      <div className="flex space-x-2">
        {cases.map((_, i) => (
          <span key={i} className="p-2 bg-gray-100 rounded-md">
            Case {i + 1}
          </span>
        ))}
      </div>
      <div>
        {cases.map((item, i) => (
          <div key={i} className="mt-2 text-sm">
            <p>
              <strong>Input:</strong> {item.input}
            </p>
            <p>
              <strong>Output:</strong> 3
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
