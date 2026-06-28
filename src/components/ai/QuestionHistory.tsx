const history = [
  "Can I hire another employee?",
  "Should I increase marketing budget?",
  "Why did profit decrease?",
  "How long is my cash runway?",
];

export default function QuestionHistory() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Previous Questions
      </h2>

      <div className="space-y-4 mt-6">

        {history.map((question) => (

          <div
            key={question}
            className="border rounded-xl p-4 hover:bg-gray-50 cursor-pointer"
          >

            {question}

          </div>

        ))}

      </div>

    </div>
  );
}