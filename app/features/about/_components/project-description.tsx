export function ProjectDescription() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold">📦 Project Description</h1>
      <p>
        This repository contains the implementation of a technical challenge focused on building a
        small but well-structured React application using modern tools and best practices.
      </p>

      <p className="mt-4 text-3xl font-bold">The project demonstrates:</p>

      <h2 className="mt-6 text-xl font-semibold">🚦 Client-side routing</h2>
      <p>
        Built with <span className="font-semibold">React Router</span>, the app supports dynamic
        navigation. Switching between pages or selecting different options updates the{' '}
        <span className="font-semibold">URL</span>, showcasing how multi-step flows and deep-linked
        pages behave in a production environment.
      </p>

      <hr className="my-6 border-zinc-700" />

      <h2 className="text-xl font-semibold">🔧 Mocked backend using MSW</h2>
      <p>
        The project uses <span className="font-semibold">Mock Service Worker (MSW)</span> to
        simulate API requests in the browser.
      </p>

      <ul className="mt-2 list-disc pl-6">
        <li>
          All requests and responses are visible in the{' '}
          <span className="font-semibold">Network</span> tab
        </li>
        <li>The server returns mock, static data</li>
        <li>The same payload is returned regardless of the request body</li>
      </ul>

      <p className="mt-2">
        This setup allows testing full API integration without relying on a real backend.
      </p>

      <hr className="my-6 border-zinc-700" />

      <h2 className="text-xl font-semibold">🔄 Server state with TanStack Query</h2>
      <p>The app uses TanStack Query for API communication, offering:</p>

      <ul className="mt-2 list-disc pl-6">
        <li>Request caching</li>
        <li>Built-in loading &amp; error states</li>
        <li>Clear separation between UI and the data layer</li>
      </ul>

      <hr className="my-6 border-zinc-700" />

      <h2 className="text-xl font-semibold">🎨 Modern UI stack</h2>
      <p>The interface is built using:</p>

      <ul className="mt-2 list-disc pl-6">
        <li>
          <span className="font-semibold">TailwindCSS</span> for utility-first styling
        </li>
        <li>
          <span className="font-semibold">shadcn/ui</span> for accessible and reusable components
        </li>
      </ul>

      <p className="mt-2">
        This results in a clean, consistent, and easily maintainable UI architecture.
      </p>

      <hr className="my-6 border-zinc-700" />

      <h2 className="text-xl font-semibold">📏 Zod for type safety and validation</h2>
      <p>
        <span className="font-semibold">Zod</span> is used to define and validate data schemas,
        ensuring type-safe interactions across the application and preventing malformed data from
        propagating through the system.
      </p>

      <hr className="my-6 border-zinc-700" />

      <h2 className="text-xl font-semibold">🧪 Purpose of the repository</h2>
      <p>This project was created specifically for frontend challenges, demonstrating:</p>

      <ul className="mt-2 list-disc pl-6">
        <li>Proficiency with modern React tooling</li>
        <li>Understanding of client-side routing</li>
        <li>Integration of external libraries</li>
        <li>Mocking backend communication</li>
        <li>Clean component structure and UI composition</li>
        <li>Adherence to real-world architectural patterns</li>
      </ul>
    </div>
  );
}
