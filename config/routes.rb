Rails.application.routes.draw do
  root 'pages#home'
  get 'blogs', to: 'pages#blogs', as: :blogs
  get 'recipes', to: 'pages#recipes', as: :recipes
  get 'shop', to: 'pages#shop', as: :shop
  get 'about', to: 'pages#about', as: :about
  get 'contact', to: 'pages#contact', as: :contact
end
