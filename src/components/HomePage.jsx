import React from 'react';

const HomePage = () => {
  const founders = [
    {
      name: "Петренко О.В.",
      experience: "20 років у банківській сфері",
      education: "Київський національний економічний університет"
    },
    {
      name: "Іваненко М.І.",
      experience: "15 років у сфері інвестицій",
      education: "Харківський національний університет ім. В.Н. Каразіна"
    },
    {
      name: "Сидоренко Л.П.",
      experience: "18 років у фінансовому консалтингу",
      education: "Львівський національний університет ім. Івана Франка"
    }
  ];

  return (
    <div className="space-y-12 mt-16">
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Мета створення</h2>
        <p className="mt-4">
          Мета створення фінансової установи "ФінансПро" - забезпечити надійні та інноваційні 
          фінансові рішення для наших клієнтів.
        </p>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">Наші завдання:</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Надання високоякісних фінансових послуг</li>
            <li>Впровадження сучасних технологій</li>
            <li>Забезпечення фінансової грамотності населення</li>
            <li>Підтримка малого та середнього бізнесу</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Засновники установи</h2>
        <div className="overflow-x-auto transform transition-transform duration-300 hover:scale-105">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border">
                  Прізвище та ініціали
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border">
                  Досвід
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border">
                  Освіта
                </th>
              </tr>
            </thead>
            <tbody>
              {founders.map((founder, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border">{founder.name}</td>
                  <td className="px-6 py-4 border">{founder.experience}</td>
                  <td className="px-6 py-4 border">{founder.education}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default HomePage;