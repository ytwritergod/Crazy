const express = require('express');
const ytdl = require('ytdl-core');
const router = express.Router();

router.post('/download', async (req, res) => {
  const { url, format } = req.body;
  if (!ytdl.validateURL(url)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }
  try {
    const info = await ytdl.getInfo(url);
    const options = { quality: 'highest' };
    if (format === 'mp3') {
      options.filter = 'audioonly';
    }
    res.header('Content-Disposition', `attachment; filename="video.${format}"`);
    ytdl(url, options).pipe(res);
  } catch (err) {
    res.status(500).json({ error: 'Error downloading video' });
  }
});

module.exports = router;
