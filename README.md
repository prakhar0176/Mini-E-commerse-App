# Mini-E-commerse-App
This is a minimal e-commerce application built using Django and Django REST Framework, React js. It supports user authentication, product listing, cart management, and order placement.

# Setup Instructions
1. Create a git repository
2. Clone the git repository locally to start development using the git clone command.
   git clone https://github.com/prakhar0176/Mini-E-commerse-App.git
   cd Mini-E-commerse-App/backend
4. Set up virtual env & install dependencies.
   python -m venv venv
   source venv/bin/activate        # Use `venv\Scripts\activate` on Windows
5. Install dependencies
   pip install -r requirements.txt

6. Run locally:
   python manage.py makemigrations    # to create migrations file to migrate changes in db
   python manage.py migrate
   python manage.py createsuperuser
   python manage.py runserver

