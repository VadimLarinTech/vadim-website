import GuiDialog from './_dialog';

// new events
const dialogClosing = ({ target: dialog }) => {
  console.log('Dialog closing', dialog);
};

const dialogClosed = ({ target: dialog }) => {
  console.log('Dialog closed', dialog);
  console.info('Dialog user action:', dialog.returnValue);

  if (dialog.returnValue === 'confirm') {
    const dialogFormData = new FormData(dialog.querySelector('form'));
    console.info('Dialog form data', Object.fromEntries(dialogFormData.entries()));
    // handleFile(dialogFormData);

    dialog.querySelector('form')?.reset();
  }
};

const dialogOpened = ({ target: dialog }) => {
  console.log('Dialog open', dialog);
};

const dialogOpening = ({ target: dialog }) => {
  console.log('Dialog opening', dialog);
};

const dialogRemoved = ({ target: dialog }) => {
  // cleanup new/optional <dialog> events
  dialog.removeEventListener('closing', dialogClosing);
  dialog.removeEventListener('closed', dialogClosed);
  dialog.removeEventListener('opening', dialogOpening);
  dialog.removeEventListener('opened', dialogOpened);
  dialog.removeEventListener('removed', dialogRemoved);

  console.log('Dialog removed', dialog);
};

// SETUP
document.querySelectorAll('dialog[modal-mode="mega"]').forEach(dialog => {
  // sugar up <dialog> elements
  GuiDialog(dialog);

  // new/optional <dialog> events to choose from
  dialog.addEventListener('closing', dialogClosing);
  dialog.addEventListener('closed', dialogClosed);
  dialog.addEventListener('opening', dialogOpening);
  dialog.addEventListener('opened', dialogOpened);
  dialog.addEventListener('removed', dialogRemoved);
});

document.querySelectorAll('dialog[modal-mode="mini"]').forEach(dialog => {
  GuiDialog(dialog);
});
