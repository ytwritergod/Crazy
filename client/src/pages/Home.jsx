import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp4');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('/api/download', { url, format }, { responseType: 'blob' });
      const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = urlBlob;
      link.setAttribute('download', `video.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Failed to download video. Check URL or try again.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 dark:text-blue-400 flicker mb-4">
          THE ANSH
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 typing mx-auto max-w-2xl">
          EXPERIENCE THE EXCELLENCE
        </p>
      </div>

      {/* Mega Downloader Section */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center mb-6">Mega Downloader</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Download whatever you want from multiple platforms like Facebook, Instagram, YouTube as we use the most powerful engine YTDL to provide seamless experience.
        </p>
        <div className="flex flex-col max-w-md mx-auto">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter YouTube URL"
            className="p-2 border rounded mb-4 dark:bg-gray-800 dark:text-white"
          />
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="p-2 border rounded mb-4 dark:bg-gray-800 dark:text-white"
          >
            <option value="mp4">MP4 (Video)</option>
            <option value="mp3">MP3 (Audio)</option>
          </select>
          <button
            onClick={handleDownload}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Downloading...' : 'Download'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Note: Downloading copyrighted content may violate platform terms. Use responsibly.{' '}
          <Link to="/copyright" className="text-blue-600 hover:underline">Learn More</Link>
        </p>
      </div>

      {/* Free Paid Courses Section */}
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center mb-6">Free Paid Courses</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Get any course you want, all for free! From YouTubers, coaching faculties, or any category—be it Editing, Hacking, One-Day Exams, Marketing, AI, or beyond. Access what you can imagine and even what you can’t!
        </p>
        <div className="text-center">
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
