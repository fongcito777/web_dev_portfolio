document.addEventListener('DOMContentLoaded', function () {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: false,
      events: []
    });
  });
  
  function submitForm() {
    const formData = {
      date: document.getElementById('date').value,
      timeStart: document.getElementById('time-start').value,
      timeEnd: document.getElementById('time-end').value,
      activity: document.getElementById('activity').value,
      place: document.getElementById('place').value,
      type: document.getElementById('type').value,
      notes: document.getElementById('notes').value,
      flag: document.getElementById('flag').value,
      freeBusy: document.getElementById('free-busy').checked,
    };
  
    console.log('Form Data:', formData);
  
    addEventToCalendar(formData);
  }
  
  function addEventToCalendar(formData) {
    $('#calendar').fullCalendar('renderEvent', {
      title: formData.activity,
      start: formData.date + ' ' + formData.timeStart,
      end: formData.date + ' ' + formData.timeEnd,
      allDay: false,
      description: formData.notes,
      location: formData.place,
      flag: formData.flag,
      freeBusy: formData.freeBusy
    }, true);
  }
  
  