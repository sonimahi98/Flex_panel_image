const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      console.log(this);
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
        const secondP = this.querySelectorAll('p')[1];
        secondP.classList.toggle("hidden");
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
