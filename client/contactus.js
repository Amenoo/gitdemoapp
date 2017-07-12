const contacts = [
  {name: "Sam Cargal-Bley", eml: "samcargalbley@gmail.com"},
  {name: "James Mendel", eml: "jrm.mendel@gmail.com"},
  {name: "Amen Tesfaye", eml: "amentesfaye15@gmail.com"},
  {name: "Vinnyak Sharma", eml: "vsharma3600@gmail.com"},
  {name: "Keyser Söze", eml: "ksoze@hotmail.com"},
]

Template.contactus.helpers({
  contactInfo: contacts
})
