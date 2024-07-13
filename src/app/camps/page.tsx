import EnrollForm from "@/components/EnrollForm";
import "./camps.css";

export default function Camps() {
  return (
    <main className="camps-page">
      <h1>Chose your field</h1>
      <section className="camps-select-section">
        <select
          name="camps_select"
          id="camps_select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Soocer </option>
          <option value="">Futsal</option>
          <option value="">Beach Soocer</option>
        </select>
      </section>

      <div className="visibility: hidden">
        <EnrollForm />
      </div>
    </main>
  );
}
