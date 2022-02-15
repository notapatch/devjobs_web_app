User.delete_all

(1..5).each do |index|
  FactoryBot.create(:user, email: "user#{index}@example.com")
end
