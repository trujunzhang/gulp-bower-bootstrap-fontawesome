
require 'rake/packagetask'


def run(command)
  system(command) or raise "RAKE TASK FAILED: #{command}"
end


namespace :gulp do
  task :cleanup do |t|
    run "rm -rf public/css && rm -rf public/fonts && rm -rf /public/javascript"
  end

  task :prepare do |t|
    run "npm install --verbose && bower install --verbose"
  end

  task :default do |t|
    run "gulp"
  end

  desc 'run gulp tasks'
  task :all do |_|
    Rake::Task['gulp:cleanup'].invoke
    Rake::Task['gulp:prepare'].invoke
    Rake::Task['gulp:default'].invoke
    puts 'gulp tasks successfully!'
  end
end


namespace :website do
  task :zip do |t|
    run "rm -f /tmp/website.zip && zip website -r public/ && mv website.zip /tmp/website.zip"
  end

  desc 'archive public to zip'
  task :all do |_|
    Rake::Task['website:zip'].invoke
    puts 'archive project successfully!'
  end
end

namespace :deploy do

  task :website do |_|
    Rake::Task['gulp:all'].invoke
    Rake::Task['website:all'].invoke
    puts 'deploy website successfully!'
  end
end

task :default => 'deploy:website'