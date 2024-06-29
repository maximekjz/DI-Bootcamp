import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
from Menu import *

def user_orga():
    print("User is an organization")
    # Ajoutez ici le code pour la fonction user_orga

def user_volunteer():
    print("User is a volunteer")
    # Ajoutez ici le code pour la fonction user_volunteer

def show_user_menu(root):
    def handle_role():
        role = role_entry.get().upper()
        if role == 'O':
            user_orga()
        elif role == 'V':
            user_volunteer()
        elif role == 'E':
            print("Thanks")
            root.quit()
        else:
            error_label.config(text="Error, choose again")

    for widget in root.winfo_children():
        widget.destroy()

    label = tk.Label(root, text="Please select your role", font=('Helvetica', 14))
    label.pack(pady=20)
    
    role_entry = ttk.Entry(root)
    role_entry.pack(pady=10)
    
    button_submit = ttk.Button(root, text="Submit", command=handle_role)
    button_submit.pack(pady=10)
    
    error_label = tk.Label(root, text="", font=('Helvetica', 12), fg='red')
    error_label.pack(pady=10)

def show_welcome_screen():
    root = tk.Tk()
    root.title("Welcome")

    welcome_text = '''
    Welcome to Israel Volunteer Experience! 
    Whether you're an organization seeking dedicated volunteers or an individual eager to make a meaningful impact, you've come to the right place. 
    Our platform connects passionate volunteers with diverse opportunities across Israel, from community initiatives to environmental projects and beyond.
    Explore, connect, and embark on your journey of giving back to the community. 
    Let's make a difference together!
    '''
    
    label = tk.Label(root, text=welcome_text, wraplength=400, font=('Helvetica', 12), justify="left")
    label.pack(pady=20, padx=20)
    
    button_start = ttk.Button(root, text="Get Started", command=lambda: show_user_menu(root))
    button_start.pack(pady=20)

    root.mainloop()

# Lancer l'écran de bienvenue
show_welcome_screen()