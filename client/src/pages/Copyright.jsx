import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Copyright Information</h1>
      <p className="text-lg mb-4">
        THE ANSH respects the intellectual property rights of all content creators. All videos, images, music, and other content downloaded via our Mega Downloader remain the property of their respective copyright owners.
      </p>
      <p className="text-lg mb-4">
        Our service is intended for personal, non-commercial use only. Users are prohibited from distributing, reproducing, or publicly displaying downloaded content without permission from the copyright holders.
      </p>
      <p className="text-lg mb-4">
        Users are solely responsible for any copyright infringement arising from improper use of downloaded content. THE ANSH does not host copyrighted content on its servers.
      </p>
      <p className="text-lg mb-4">
        If you are a copyright holder and believe your content is being misused via our service, please contact us at{' '}
        <a href="mailto:support@theansh.com" className="text-blue-600 hover:underline">
          support@theansh.com
        </a>{' '}
        with the URL, description, and proof of ownership. We will promptly address your concerns.
      </p>
      <p className="text-lg">
        Learn more about our <Link to="/terms" className="text-blue-600 hover:underline">Terms of Use</Link>.
      </p>
    </div>
  );
}

export default Copyright;
