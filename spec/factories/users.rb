FactoryBot.define do
  factory :user do
    email { FFaker::Internet.unique.email }
    username { FFaker::Internet.unique.user_name }
    password { "password" }
    password_confirmation { "password" }
  end
end
