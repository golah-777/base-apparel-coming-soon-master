class App{
  constructor(){
   this.email = document.getElementById('email');
   this.form = document.querySelector('#form');
   this.errorIcon = document.querySelector('.error-icon');
   this.submit = document.getElementById('submit');
   this.errorMessage = document.querySelector('.error-message');
   this.validMessage = document.querySelector('.valid-message');

   this.addEventlisteners();
  }

  addEventlisteners(){
    document.body.addEventListener('click', (event)=>{
     this.handleOnClick(event);
    })

    this.form.addEventListener('submit',(event)=>{
      event.preventDefault();
    })
  }

  handleOnClick(event){
    const submitBtnClicked = this.submit.contains(event.target);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    const email = this.email.value;
    const isEmailVailid = emailRegex.test(email);

    if(submitBtnClicked && email=='' && !isEmailVailid){
      this.errorMessage.style.display = 'inline';
      this.errorIcon.style.display = 'inline';
      this.form.style.border  = '1.5px solid red';
      this.validMessage.style.display = 'none';
    } else if (submitBtnClicked && !email =='' && !isEmailVailid){
      this.errorMessage.style.display = 'inline';
      this.errorIcon.style.display = 'inline';
      this.form.style.border  = '1.5px solid red';
      this.validMessage.style.display = 'none';
    } else if(submitBtnClicked && !email == '' && isEmailVailid){
      this.form.style.border  = '1.5px solid green';
      this.validMessage.style.display = 'inline';
      this.validMessage.style.color = 'green';
      this.errorMessage.style.display = 'none';
      this.errorIcon.style.display = 'none';
    }
  }
}

const app = new App();

