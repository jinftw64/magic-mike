import random

def flip_coin():
    return random.choice(['Heads', 'Tails'])

def krarks_thumb_flip():
    return [flip_coin(), flip_coin()]

if __name__ == "__main__":
    num_flips = int(input("How many times would you like to flip the coin? "))
    thumb_active = input("Is Krark's Thumb in play? (yes/no): ").lower()

    heads_wins = 0
    tails_losses = 0
    for _ in range(num_flips):
        if thumb_active == 'yes':
            results = krarks_thumb_flip()
            print("Coin flip results:", ", ".join(results))
            if 'Heads' in results:
                heads_wins += 1
            else:
                tails_losses += 1
        else:
            result = flip_coin()
            print("Coin flip result:", result)
            if result == 'Heads':
                heads_wins += 1
            else:
                tails_losses += 1

    print("Heads wins:", heads_wins)
    print("Tails losses:", tails_losses)
