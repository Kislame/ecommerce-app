import { useNavigate } from 'react-router-dom';

function Unauthorized() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section className="flex items-center h-screen">
      <div className="bg-red-200 p-8 mx-auto max-w-2xl space-y-4">
        <h1 className="text-red-700 md:text-2xl sm:text-lg">Unauthorizd</h1>
        <button type="button" className="btn btn-info" onClick={goBack}>
          Go Back
        </button>
      </div>
    </section>
  );
}

export default Unauthorized;
