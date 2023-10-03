

//looping over array of objects
//from joyofreact 
const data = [
  {
    id: 'sunita-abc123',
    name: 'Sunita Kumar',
    job: 'Electrical Engineer',
    email: 'sunita.kumar@acme.co',
  },
  {
    id: 'henderson-def456',
    name: 'Henderson G. Sterling II',
    job: 'Receptionist',
    email:
      'henderson-the-second@acme.co',
  },
  {
    id: 'aio-ghi789',
    name: 'Aoi Kobayashi',
    job: 'President',
    email: 'kobayashi.aoi@acme.co',
  },
];

//print out the president 
//step 1: print out all the entries first
//step2: test for job==="President" and print
data.map(x=>{
  if (x.job==='President'){
    console.log(x)
  }
})

//convert into functional form with ternary operator
data.map(x=>{
  (x.job==='President') ? console.log(x) : null
})