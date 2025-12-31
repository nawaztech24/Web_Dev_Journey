import tkinter as tk

root = tk.Tk()
root.title("Blinking Message 😜")
root.attributes("-fullscreen", True)
root.configure(bg="black")

text = (
    " HELLO EVERYONE 😂\n"
    " DON'T SLEEP TONIGHT 😴\n\n"
    " KYUNKI 26 KO\n"
    " DUNIYAA KHATAM HAI \n\n"
    "🤣 SONE KA KOI FAAYDA NAHI\n"
    " CHAI PEEO & ZINDA RAHO ☕"
)

label = tk.Label(
    root,
    text=text,
    fg="yellow",
    bg="black",
    font=("Arial", 44),
    justify="center"
)

label.pack(expand=True)

# Blinking logic
visible = True
def blink():
    global visible
    label.config(fg="yellow" if visible else "black")
    visible = not visible
    root.after(500, blink)   # 500 ms = blinking speed

blink()

# ESC se band hoga
root.bind("<Escape>", lambda e: root.destroy())

root.mainloop()
