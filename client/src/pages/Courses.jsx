import { useState } from 'react';

function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Mock course data
  const courses = [
    { id: 1, title: 'Video Editing Masterclass', category: 'Editing', link: '/assets/editing-course.mp4' },
    { id: 2, title: 'Ethical Hacking Basics', category: 'Hacking', link: '/assets/hacking-course.pdf' },
    { id: 3, title: 'One-Day Exam Prep', category: 'One Day Exams', link: '/assets/exam-course.mp4' },
    { id: 4, title: 'Digital Marketing 101', category: 'Marketing', link: '/assets/marketing-course.pdf' },
    { id: 5, title: 'AI for Beginners', category: 'AI', link: '/assets/ai-course.mp4' },
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredCourses);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Free Paid Courses</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-8">
        Search for any course you want—Editing, Hacking, One-Day Exams, Marketing, AI, or more!
      </p>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search courses (e.g., Editing, AI)"
          className="p-2 border rounded-l w-64 dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.length > 0 ? (
          results.map((course) => (
            <div key={course.id} className="p-4 border rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Category: {course.category}</p>
              <a
                href={course.link}
                className="text-blue-600 hover:underline"
              >
                Start Course
              </a>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No courses found. Try searching for Editing, AI, etc.</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
