FactoryBot.define do
  factory :job do
    company { FFaker::Company.name }
    logo { "images/blogr.svg" }
    position { FFaker::Company.position }
    posted_at { "2022-02-15 14:41:07" }
    contract { 1 }
    location { FFaker::Address.country }
    website { FFaker::Internet.http_url }
    apply { "#{FFaker::Internet.http_url}/apply" }
    description { FFaker::Lorem.paragraph }
  end
end
