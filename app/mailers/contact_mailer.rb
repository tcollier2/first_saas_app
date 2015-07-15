class ContactMailer < ActionMailer::Base
   
   default to: 'tony.collier13@gmail.com'
   
   def contact_eamil(name, email, body)
    @name = name
    @email = email
    @body = body
    
    mail(from: email, subject: 'Contact Form Message')
   end
   
    
end