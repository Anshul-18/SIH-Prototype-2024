
    if (localStorage.getItem('visitCount')) {
        localStorage.setItem('visitCount', Number(localStorage.getItem('visitCount')) + 1);
      } else {
        localStorage.setItem('visitCount', 1);
      }
      document.getElementById('visit-count').innerText = localStorage.getItem('visitCount');
