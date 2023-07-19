from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/survey', methods=['POST'])
def handle_survey():
    # Get the survey data from the request
    survey_data = request.json
    
    # Store the survey data in a file
    with open('survey_data.txt', 'a') as file:
        file.write(f"Name: {survey_data['name']}\n")
        file.write(f"Email: {survey_data['email']}\n")
        file.write(f"Age: {survey_data['age']}\n")
        file.write(f"Favorite Number: {survey_data['number']}\n")
        file.write(f"Current Role: {survey_data['dropdown']}\n")
        file.write(f"Satisfaction: {survey_data['recommendation']}\n")
        file.write(f"From School: {survey_data['favoriteFeature']}\n")
        file.write(f"Favorite Subjects: {', '.join(survey_data['favoriteSubjects'])}\n")
        file.write(f"Comments: {survey_data['comments']}\n")
        file.write("\n")
    
    # Return a response indicating success
    return jsonify({'message': 'Survey response received'})

if __name__ == '__main__':
    app.run()

