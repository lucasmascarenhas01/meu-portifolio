function updateProgress(bar, label, percent) {
    bar.style.width = `${percent}%`;
  }
  
  updateProgress(
    document.querySelector('#bar1 .progress-fill'),
    document.querySelector('#bar1 + .progress-label'),
    32
  );
  
  updateProgress(
    document.querySelector('#bar2 .progress-fill'),
    document.querySelector('#bar2 + .progress-label'),
    32
  );
  updateProgress(
    document.querySelector('#bar3 .progress-fill'),
    document.querySelector('#bar3 + .progress-label'),
    65
  );
  updateProgress(
    document.querySelector('#bar4 .progress-fill'),
    document.querySelector('#bar4 + .progress-label'),
    12
  );
  