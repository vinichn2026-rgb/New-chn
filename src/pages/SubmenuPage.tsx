import { Link, useParams } from "react-router-dom";
import { submenuContent } from "@/data/submenuContent";

const SubmenuPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? submenuContent[slug] : undefined;

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold NET_Hero_H1">Page Not Found</h2>
        <p className="mt-4 text-slate-600">The requested section does not exist. Please choose a valid service.</p>
        <Link to="/" className="mt-8 inline-block text-blue-600 hover:text-blue-800">Return to homepage</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-4 NET_Hero_H1">{page.title}</h2>
      <p className="text-slate-700 mb-6">{page.description}</p>
      <p className="text-sm text-slate-500">This is a simplified page view; previous advanced template logic has been removed.</p>
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800">Back to home</Link>
      </div>
    </div>
  );
};

export default SubmenuPage;
