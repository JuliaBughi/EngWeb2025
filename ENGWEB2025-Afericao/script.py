import json
import sys

def format_data(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        for book in data:
            # Converter "author" para lista de strings
            book["author"] = [author.strip() for author in book["author"].split(",")]
            
            # Converter "genres", "characters", "awards", "ratingsByStars" e "setting" para listas reais
            book["genres"] = eval(book["genres"]) if isinstance(book["genres"], str) else book["genres"]
            book["characters"] = eval(book["characters"]) if isinstance(book["characters"], str) else book["characters"]
            book["awards"] = eval(book["awards"]) if isinstance(book["awards"], str) else book["awards"]
            book["ratingsByStars"] = eval(book["ratingsByStars"]) if isinstance(book["ratingsByStars"], str) else book["ratingsByStars"]
            book["setting"] = eval(book["setting"]) if isinstance(book["setting"], str) else book["setting"]
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        
        print("Arquivo formatado com sucesso!")
    except Exception as e:
        print(f"Erro ao processar o arquivo: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Uso: python3 script.py dataset.json")
    else:
        format_data(sys.argv[1])
